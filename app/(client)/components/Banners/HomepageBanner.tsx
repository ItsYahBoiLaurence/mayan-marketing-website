import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import CustomButton from "../Button/CustomButton";

const HomepageBanner = () => {
  return (
    <>
      {/* Desktop */}
      <BackgroundImage src="/homepage_banner.png" h="100vh" visibleFrom="md">
        <Paper h="100vh" bg={"#042161"} opacity={0.90}>
          <Center h="90%">
            <Stack align="center">
              <Text ta="center" size="lg" c="white">
                Drive Growth with Confidence.
              </Text>
              <Title ta="center" size="54px" fw={700} c="white">
                {"Let's scale your "}
                <br /> business{" "}
                <span style={{ color: "#FFCD15" }}>together</span>
              </Title>
              <Text ta="center" size="md" c="white">
                15 years of combined experience refined to help <br /> you
                maximize {"technology's"} full potential.
              </Text>
              <Group>
                <CustomButton
                  radius={"xl"}
                  variant="filled"
                  color="#0D60FF"
                  px={"lg"}
                  to="/our-services"
                >
                  Learn More
                </CustomButton>
                <CustomButton
                  radius={"xl"}
                  variant="outline"
                  color="white"
                  px={"lg"}
                  to="/contact-us"
                >{`Let's Talk`}</CustomButton>
              </Group>
            </Stack>
          </Center>
        </Paper>
      </BackgroundImage>

      {/* Mobile */}
      <BackgroundImage src="/homepage_banner.png" h="80vh" hiddenFrom="md">
        <Paper h="80vh" bg={"#042161"} opacity={0.95}>
          <Center h="90%" w="80%">
            <Stack align="start" gap="lg">
              <Box>
                <Text size="xs" c="white">
                  Drive Growth with Confidence.
                </Text>
                <Title fw={700} c="white" order={1}>
                  {"Let's scale your "}
                  <br /> business{" "}
                  <span style={{ color: "#FFCD15" }}>together</span>
                </Title>
              </Box>
              <Text size="xs" c="white">
                15 years of combined experience refined to help <br /> you
                maximize {"technology's"} full potential.
              </Text>
              <Group>
                <CustomButton
                  radius={"xl"}
                  variant="filled"
                  color="#0D60FF"
                  px={"lg"}
                  to="/our-services"
                  size="xs"
                >
                  Learn More
                </CustomButton>
                <CustomButton
                  radius={"xl"}
                  variant="outline"
                  color="white"
                  px={"lg"}
                  to="/contact-us"
                  size="xs"
                >{`Let's Talk`}</CustomButton>
              </Group>
            </Stack>
          </Center>
        </Paper>
      </BackgroundImage>
    </>
  );
};

export default HomepageBanner;
