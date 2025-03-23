import {
  Card,
  Paper,
  Stack,
  Title,
  Text,
  Avatar,
  BackgroundImage,
} from "@mantine/core";
import React from "react";

type TechCardProps = {
  title: string;
  description: string;
  image: string;
};

const TechCard = ({ title, description, image }: TechCardProps) => {
  return (
    <>
      <BackgroundImage
        src={"/bgBanner.png"}
        radius={"lg"}
        h={"100%"}
        visibleFrom="md"
      >
        <Paper
          w={"100%"}
          h={"100%"}
          bg={"#EFEFEF"}
          p={"xl"}
          opacity={0.97}
          radius={"lg"}
        >
          <Stack h={"100%"} justify={"space-around"}>
            <Avatar size={"xl"} src={image} />
            <Title>{title} </Title>
            <Text>{description}</Text>
          </Stack>
        </Paper>
      </BackgroundImage>

      <BackgroundImage
        src={"/bgBanner.png"}
        radius={"lg"}
        h={"100%"}
        hiddenFrom="md"
      >
        <Paper
          w={"100%"}
          h={"100%"}
          bg={"#EFEFEF"}
          p={"xl"}
          opacity={0.97}
          radius={"lg"}
        >
          <Stack h={"100%"} justify={"space-around"}>
            <Avatar size={"lg"} src={image} />
            <Title order={2} fw={700}>
              {title}
            </Title>
            <Text size={"xs"}>{description}</Text>
          </Stack>
        </Paper>
      </BackgroundImage>
    </>
  );
};

export default TechCard;
