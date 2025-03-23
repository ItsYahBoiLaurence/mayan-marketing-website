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
  Alert,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconCheck, IconExclamationCircle } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  // Use effect to show notification when status changes
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
  }, [submitStatus.type, submitStatus.message]);

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

      console.log("Form submission response:", response.data);

      // Check if we have a success response (either explicit or via our proxy's fallback)
      const isSuccess = response.data.success || response.status === 200;

      if (isSuccess) {
        reset();
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });
      } else {
        // This case shouldn't happen with our updated proxy, but just in case
        setSubmitStatus({
          type: "error",
          message:
            response.data.error ||
            "Something went wrong. Please try again later.",
        });
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      // Check if the error response contains data
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again later.";

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BackgroundImage
        src="/formBg.jpeg"
        pos={"absolute"}
        bottom={"-50px"}
        h={"550px"}
        radius={"lg"}
        visibleFrom="md"
      >
        <Paper
          p={"lg"}
          radius={"lg"}
          w={"100%"}
          h={"100%"}
          bg={"#EFEFEF"}
          opacity={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack w={"90%"} h={"80%"}>
            <Title order={3} fw={500}>
              {"Let's talk about your business!"}
            </Title>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
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
                </Stack>
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

      <BackgroundImage
        src="/formBg.jpeg"
        radius={"lg"}
        w={"90%"}
        mx={"auto"}
        hiddenFrom="md"
      >
        <Paper
          p={"lg"}
          radius={"lg"}
          w={"100%"}
          h={"100%"}
          bg={"#EFEFEF"}
          opacity={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack w={"90%"} h={"80%"}>
            <Title order={3} fw={500}>
              {"Let's talk about your business!"}
            </Title>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
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
                </Stack>
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
    </>
  );
};

export default FormComponent;
