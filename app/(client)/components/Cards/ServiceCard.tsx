import { urlFor } from "@/sanity/lib/image";
import {
  Avatar,
  BackgroundImage,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <BackgroundImage src={"/serviceBg.png"} w={"100%"} h={"100%"} radius={"md"}>
      <Paper
        p={"xl"}
        withBorder={true}
        bg={"#F6F6F6"}
        h={"100%"}
        opacity={0.95}
      >
        <Stack justify="center" gap={"xs"}>
          <Avatar size={'lg'} variant="transparent" radius={'xs'}>
            <Image src={urlFor(image).url()} />
          </Avatar>
          <Text size="lg" fw={700}>
            {title}
          </Text>
          <Text size="xs">{description}</Text>
        </Stack>
      </Paper>
    </BackgroundImage>
  );
};

export default ServiceCard;
