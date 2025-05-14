import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import ServiceCard from "../Cards/ServiceCard";
import { fetchFromSanity } from "@/lib/sanityApi";
import ProcessCard from "../Cards/ProcessCard";

export const revalidate = 60

interface serviceType {
  title: string,
  description: string,
  image: string
}

const ServiceSection = async () => {

  const services = await fetchFromSanity(`*[_type == "process"] | order(order asc) {title, description, image}
`)
  return (
    <>
      <Flex w={"80%"} mx={"auto"} p={"xl"} gap={"md"} visibleFrom="md">
        <Box flex={0.31}>
          <Stack justify="start">
            <Title order={2} fw={700}>
              Your blueprint for digital implementation, simplified.
            </Title>
            <Text size="xs">
              Seamlessly implement technology with clarity and confidence.
            </Text>
          </Stack>
        </Box>
        <SimpleGrid cols={2} verticalSpacing={"xl"} spacing={"xl"} flex={0.69}>
          {services.map((service: serviceType, index: number) => (
            <ProcessCard
              key={index}
              {...service}
            />
          ))}
        </SimpleGrid>
      </Flex>

      <Container w={"90%"} mx={"auto"} hiddenFrom="md" my={"xl"}>
        <Stack justify="start" gap={"sm"} py={"xl"}>
          <Title ta={"center"} order={2} fw={700}>
            Your blueprint for digital implementation, simplified.
          </Title>
          <Text ta={"center"} size="xs">
            Seamlessly implement technology with clarity and confidence.
          </Text>
        </Stack>

        <SimpleGrid cols={1} verticalSpacing={"xl"} spacing={"xl"}>
          {services.map((service: serviceType, index: number) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ServiceSection;
