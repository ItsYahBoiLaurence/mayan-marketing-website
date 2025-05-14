"use client";
import {
  BackgroundImage,
  Button,
  Checkbox,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Group,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { notifications } from "@mantine/notifications";
import { useMediaQuery } from "@mantine/hooks";

// Define a type alias for the submit status state
type SubmitStatus = {
  type: "success" | "error" | null;
  message: string;
};

const FormComponent = () => {
  // Determine if the screen is desktop size (adjust the query if needed)
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacyPolicy: false,
    },
  });

  // Watch the privacy policy checkbox value
  const privacyPolicyChecked = watch("privacyPolicy");

  // Show notifications when the submitStatus changes
  useEffect(() => {
    if (submitStatus.type === "success") {
      notifications.show({
        title: "Success",
        message: submitStatus.message,
        color: "green",
      });
    } else if (submitStatus.type === "error") {
      notifications.show({
        title: "Error",
        message: submitStatus.message,
        color: "red",
      });
    }
  }, [submitStatus]);

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      const response = await axios.post("/api/proxy", data, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 8000, // 8 second timeout
      });

      // Check if we have a success response (either explicit or via our proxy's fallback)
      const isSuccess = response.data.success || response.status === 200;

      if (isSuccess) {
        reset();
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            response.data.error ||
            "Something went wrong. Please try again later.",
        });
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      let errorMessage = "Something went wrong. Please try again later.";

      // Use axios.isAxiosError to safely access error.response
      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.error ||
          error.response?.data?.message ||
          error.message ||
          errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BackgroundImage
      src="/formBg.jpeg"
      {...(isDesktop
        ? { pos: "absolute", bottom: "-50px", h: "550px", radius: "lg" }
        : { w: "90%", mx: "auto", radius: "lg" })}
    >
      <Paper
        p="lg"
        radius="lg"
        w="100%"
        h="100%"
        bg="#EFEFEF"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack w="90%" h="80%">
          <Title order={3} fw={500}>
            {"Let's talk about your business!"}
          </Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <TextInput
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
                label={<Text>What is your name?</Text>}
                error={errors.name?.message}
                disabled={isSubmitting}
              />
              <TextInput
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                label={<Text>Email</Text>}
                error={errors.email?.message}
                disabled={isSubmitting}
              />
              <Textarea
                {...register("message", {
                  required: "Message is required",
                })}
                placeholder="Please tell us what you are trying to achieve"
                label={<Text>Message</Text>}
                error={errors.message?.message}
                disabled={isSubmitting}
              />
              <Checkbox
                {...register("privacyPolicy", {
                  required: "You must agree to the Privacy Policy",
                })}
                label={
                  <Text size="xs">
                    By clicking the checkbox you agree to the Privacy Policy
                    and terms of service
                  </Text>
                }
                disabled={isSubmitting}
                error={errors.privacyPolicy?.message}
              />
              <Group justify="center">
                <Button
                  variant="filled"
                  color="#FBCA12"
                  autoContrast
                  type="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting || !privacyPolicyChecked}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </BackgroundImage>
  );
};

export default FormComponent;
