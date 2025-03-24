import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Image,
  SimpleGrid,
  Container,
} from "@mantine/core";
import React from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import SectionBanner from "../../components/Banners/SectionBanner";
import BannerWithOverlap from "../../components/Banners/BannerWithOverlap";
import TechCard from "../../components/Cards/TechCard";
import CarouselBanner from "../../components/Banners/CarouselBanner";
import CustomButton from "../../components/Button/CustomButton";
import Img from "next/image";
const services = [
  {
    id: 1,
    title: "Customer-facing apps",
    description:
      "Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.",
  },
  {
    id: 2,
    title: "Revenue Driving Solutions",
    description:
      "Build digital product that open your revenue streams. Provide value to your users and growth for your business. ",
  },
  {
    id: 3,
    title: "Enterprise AI Solutions",
    description:
      "Digitize business processes to empower your field operations. Tap the power of data to understand your customers and push your social responsibility and sustainability initiatives. ",
  },
];

const techStack = [
  {
    id: 1,
    title: "Jira",
    description:
      "Widely used for managing projects and automating workflows in tech consulting.",
    image: "/jira.png",
  },
  {
    id: 2,
    title: "Github",
    description: "Central to software development and DevOps workflows.",
    image: "/github.png",
  },
  {
    id: 3,
    title: "Terraform",
    description: "Automates infrastructure provisioning in cloud environments.",
    image: "/terraform.png",
  },
];

const page = () => {
  return (
    <Box>
      <>
        <BackgroundImage
          src="/bgBanner.png"
          w={"100%"}
          h={"80vh"}
          mb={"60px"}
          visibleFrom="md"
        >
          <Paper h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
            <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
              <Box style={{ flex: 0.4 }} h={"100%"}>
                <Center h={"100%"} px={"xl"}>
                  <Stack w={"80%"}>
                    <Title c={"#fff"} fw={700}>
                      Grow your Digital Product with your own Mobile App
                    </Title>
                    <Text size="md" c={"#fff"}>
                      At the heart of our mobile app development process is a
                      commitment to align the mobile app with your company’s
                      goals. We define a clear objective, ensuring that every
                      app we build directly supports your vision.{" "}
                    </Text>
                    <Group>
                      <Button color={"#0D60FF"} px={"xl"} radius={"xl"}>
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        px={"xl"}
                        color="white"
                        radius={"xl"}
                      >
                        {"Let's Talk"}
                      </Button>
                    </Group>
                  </Stack>
                </Center>
              </Box>
              <Box style={{ flex: 0.6 }} pos={"relative"} h={"100%"}>
                <Image
                  src="/Cps2.png"
                  h={"1000px"}
                  w={"100%"}
                  bottom={"-100px"}
                  alt="logo"
                  fit="contain"
                />
              </Box>
            </Flex>
          </Paper>
        </BackgroundImage>

        <BackgroundImage
          src="/bgBanner.png"
          w={"100%"}
          h={"80vh"}
          mb={"60px"}
          hiddenFrom="md"
        >
          <Paper h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
            <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
              <Box h={"100%"}>
                <Center h={"100%"} px={"xl"}>
                  <Stack w={"100%"} gap={"xl"}>
                    <Title order={2} c={"#fff"} fw={700}>
                      Grow your Digital Product with your own Mobile App
                    </Title>
                    <Text size="xs" c={"#fff"}>
                      At the heart of our mobile app development process is a
                      commitment to align the mobile app with your company’s
                      goals. We define a clear objective, ensuring that every
                      app we build directly supports your vision.{" "}
                    </Text>
                    <Group>
                      <CustomButton
                        color={"#0D60FF"}
                        px={"xl"}
                        radius={"xl"}
                        to={"/contact-us"}
                        size="xs"
                      >
                        Learn More
                      </CustomButton>
                      <CustomButton
                        variant="outline"
                        px={"xl"}
                        color="white"
                        radius={"xl"}
                        to={"/contact-us"}
                        size="xs"
                      >
                        {"Let's Talk"}
                      </CustomButton>
                    </Group>
                  </Stack>
                </Center>
              </Box>
            </Flex>
          </Paper>
        </BackgroundImage>
      </>

      <>
        <Box w={"80%"} mx={"auto"} my={"xl"} py={"xl"} visibleFrom="md">
          <SimpleGrid cols={3} verticalSpacing={"xl"} spacing={"xl"}>
            {services.map(({ id, title, description }) => (
              <ServiceCard
                key={id}
                id={id}
                title={title}
                description={description}
              />
            ))}
          </SimpleGrid>
        </Box>
        <Box
          w={"80%"}
          mx={"auto"}
          my={"xl"}
          py={"xl"}
          hiddenFrom="md"
          mt={"-150px"}
        >
          <SimpleGrid cols={1} verticalSpacing={"xl"} spacing={"xl"}>
            {services.map(({ id, title, description }) => (
              <ServiceCard
                key={id}
                id={id}
                title={title}
                description={description}
              />
            ))}
          </SimpleGrid>
        </Box>
      </>

      <CarouselBanner />

      <>
        <Stack
          w={"80%"}
          mx={"auto"}
          align={"center"}
          py={"xl"}
          my={"xl"}
          gap={"xl"}
          visibleFrom="md"
        >
          <Flex direction={"row"} gap={"xl"}>
            <Stack flex={0.4} align={"start"}>
              <Title>
                Your web app is not just a product but a driver of strategic
                growth
              </Title>
              <Text>
                Transform your app ideas into fully functional, dynamic
                solutions that deliver a seamless, engaging experience, boosting
                user engagement and strengthening your competitive edge.
              </Text>
              <Button>Let's Talk</Button>
            </Stack>
            <Box flex={0.6}></Box>
          </Flex>
        </Stack>

        <Stack
          w={"80%"}
          mx={"auto"}
          align={"center"}
          py={"xl"}
          my={"xl"}
          gap={"xl"}
          hiddenFrom="md"
        >
          <Flex direction={"column"} gap={"md"}>
            <Title order={2} fw={700} ta={"center"}>
              Your web app is not just a product but a driver of strategic
              growth
            </Title>
            <Text size={"xs"} ta={"center"}>
              Transform your app ideas into fully functional, dynamic solutions
              that deliver a seamless, engaging experience, boosting user
              engagement and strengthening your competitive edge.
            </Text>
            <CustomButton to={"/contact-us"} color="black" radius={"xl"}>
              Let's Talk
            </CustomButton>

            <Box flex={0.6}></Box>
          </Flex>
        </Stack>
      </>

      <BannerWithOverlap
        leftSideImage="/bannerOverlap.png"
        rightSideImage="/bgBanner.png"
        title="Empower your team with analytics and make data-driven decisions. "
        description="Transform your online platform into a powerful tool for engaging customers, driving leads and sales, and nurturing them throughout their journey with our proven 3DX process."
        rightColor="#FBCA12"
        buttonText={"Book a discovery call"}
      />

      <>
        <Flex
          w={"80%"}
          mx={"auto"}
          my={"32px"}
          h={"40vh"}
          gap={"xl"}
          py={"xl"}
          visibleFrom="md"
        >
          <Stack flex={0.3} h={"100%"}>
            <Box>
              <Text fw={700} size={"lg"}>
                Automations:
              </Text>
              <Title fw={700}>
                Modernize your business processes, dominate your industry.{" "}
              </Title>
            </Box>
            <Text>
              Minimize manual work and reduce human errors with automation tools
              and solution built for enterprises. Mayan can integrate bespoke
              automation solutions with your current ERP systems, providing an
              easy-to-use that supports quick adoption.{" "}
            </Text>
          </Stack>
          <SimpleGrid
            cols={3}
            verticalSpacing={"xl"}
            spacing={"xl"}
            style={{ flex: 0.7 }}
          >
            {techStack.map(({ id, title, description, image }) => (
              <TechCard
                key={id}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </SimpleGrid>
        </Flex>

        <Flex
          w={"80%"}
          mx={"auto"}
          my={"32px"}
          gap={"xl"}
          py={"xl"}
          hiddenFrom="md"
          direction={"column"}
        >
          <Stack h={"100%"}>
            <Box>
              <Text fw={700} size={"sm"}>
                Automations:
              </Text>
              <Title order={2} fw={700}>
                Modernize your business processes, dominate your industry.
              </Title>
            </Box>
            <Text size={"xs"}>
              Minimize manual work and reduce human errors with automation tools
              and solution built for enterprises. Mayan can integrate bespoke
              automation solutions with your current ERP systems, providing an
              easy-to-use that supports quick adoption.
            </Text>
          </Stack>
          <SimpleGrid cols={1} verticalSpacing={"xl"} spacing={"xl"}>
            {techStack.map(({ id, title, description, image }) => (
              <TechCard
                key={id}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </>

      <SectionBanner
        image="./bannerImage.png"
        title={"Share your stories. Let's Get In Touch"}
        subDescription={
          "Every business has a unique journey. Let’s discuss your challenges, opportunities, to determine the right tech strategy that will drive your success."
        }
        buttonDesc={"Book a discovery call"}
        textColor={"white"}
      />
    </Box >
  );
};

export default page;
