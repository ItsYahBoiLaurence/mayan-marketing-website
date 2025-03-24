import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Marquee from "react-fast-marquee";
import CustomButton from "../Button/CustomButton";

const items = [
  {
    id: 1,
    image: "/grandSuite.png",
  },
  {
    id: 2,
    image: "/Dashboard.jpg",
  },
  {
    id: 3,
    image: "/carousel3.png",
  },
];

const CarouselBanner = () => {
  return (
    <>
      <Flex visibleFrom="md">
        <Flex bg={"black"} flex={0.6} py={"xl"} gap={"xl"} direction={"column"}>
          <Box>
            <Marquee speed={50}>
              {items.map((item) => (
                <Paper key={item.id} mx={"20px"} radius={"xl"}>
                  <Image
                    src={item.image}
                    alt={item.id.toString()}
                    h={"300px"}
                    radius={"lg"}
                  />
                </Paper>
              ))}
            </Marquee>
          </Box>
          <Box>
            <Marquee speed={25} direction="right">
              {items.map((item) => (
                <Paper key={item.id} mx={"20px"} radius={"xl"}>
                  <Image
                    src={item.image}
                    alt={item.id.toString()}
                    h={"300px"}
                    radius={"lg"}
                  />
                </Paper>
              ))}
            </Marquee>
          </Box>
        </Flex>
        <Box flex={0.4}>
          <BackgroundImage src="/bgBanner.png" w={"100%"} h={"100%"}>
            <Paper opacity={0.98} bg={"#1E1E1E"} h={"100%"} w={"100%"} p={"xl"}>
              <Center h={"100%"} w={"100%"}>
                <Stack align="start" gap={"xl"} justify="start" w={"50%"}>
                  <Title fw={700} c={"white"}>
                    Crafting Seamless Digital Experiences, One Website at a
                    Time.
                  </Title>
                  <Text c={"white"}>
                    Transform your online platform into a powerful tool for
                    engaging customers, driving leads and sales, and nurturing
                    them throughout their journey with our proven 3DX process.
                  </Text>
                  <CustomButton
                    color={"#FFCE13"}
                    radius={"xl"}
                    c={"black"}
                    to={"/contact-us"}
                  >
                    Let's Talk
                  </CustomButton>
                </Stack>
              </Center>
            </Paper>
          </BackgroundImage>
        </Box>
      </Flex>

      <Flex hiddenFrom="md" direction={"column"}>
        <BackgroundImage src="/bgBanner.png" w={"100%"} h={"100%"}>
          <Paper
            opacity={0.98}
            bg={"#1E1E1E"}
            h={"100%"}
            w={"100%"}
            p={"xl"}
            radius={0}
          >
            <Center h={"100%"} w={"100%"}>
              <Stack align="start" gap={"lg"} justify="center">
                <Title order={2} fw={700} c={"white"}>
                  Crafting Seamless Digital Experiences, One Website at a Time.
                </Title>
                <Text size="xs" c={"white"}>
                  Transform your online platform into a powerful tool for
                  engaging customers, driving leads and sales, and nurturing
                  them throughout their journey with our proven 3DX process.
                </Text>
                <CustomButton
                  color={"#FFCE13"}
                  radius={"xl"}
                  c={"black"}
                  to={"/contact-us"}
                  size="xs"
                >
                  Let's Talk
                </CustomButton>
              </Stack>
            </Center>
          </Paper>
        </BackgroundImage>
        <Flex
          direction={"column"}
          gap={"md"}
          bg={"#1e1e1e"}
          px={"md"}
          pb={"md"}
        >
          <Marquee speed={25} direction="right">
            {items.map((item) => (
              <Paper key={item.id} mx={"xs"} radius={"xl"}>
                <Image
                  src={item.image}
                  alt={item.id.toString()}
                  h={"100px"}
                  w={"200px"}
                  radius={"md"}
                />
              </Paper>
            ))}
          </Marquee>
        </Flex>
      </Flex>
    </>
  );
};

export default CarouselBanner;
