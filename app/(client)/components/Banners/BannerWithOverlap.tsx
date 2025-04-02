import {
  AspectRatio,
  Avatar,
  BackgroundImage,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import CustomButton from "../Button/CustomButton";
import { IconBrandLinkedin } from "@tabler/icons-react";

type BannerWithOverlapProps = {
  leftSideImage: string;
  rightSideImage: string;
  title: string;
  description: string;
  buttonText?: string;
  listData?: {
    image?: string;
    name: string;
    position: string;
    ceo_description?: string;
    company_line?: string;
  }[];
  opacity?: number;
  rightColor?: string;
  buttonColor?: string;
};
const BannerWithOverlap = ({
  leftSideImage,
  rightSideImage,
  title,
  description,
  buttonText,
  listData,
  opacity,
  rightColor,
  buttonColor,
}: BannerWithOverlapProps) => {
  return (
    <>
      <Flex w={"100%"} h={"100%"} visibleFrom="md">
        <Box py={"xl"} flex={0.6} w={'100%'} style={{ overflow: "hidden" }}>
          <AspectRatio ratio={1080 / 720}>
            <Image src={leftSideImage} alt="logo" />
          </AspectRatio>
        </Box>
        <Box pos={"relative"} flex={0.4}>
          <BackgroundImage src={rightSideImage} w={"100%"} h={"100%"}>
            <Paper
              radius={"none"}
              bg={rightColor}
              p={"xl"}
              opacity={opacity ?? 0.95}
              h={"100%"}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Stack gap={"xl"} w={"100%"} align={"start"}>
                <Title fw={700}>{title}</Title>
                <Text>{description}</Text>
                {listData && (
                  <Box>
                    <Divider my={"xl"} color={"black"} />
                    <Flex direction={"column"} gap={"xl"}>
                      {listData.map((item, index) => (
                        <Stack key={index} gap={"xl"}>
                          <Group gap={"lg"} justify={"space-between"}>
                            <Group gap={"lg"}>
                              <Avatar
                                color="black"
                                size={"lg"}
                                src={item.image ?? null}
                              />
                              <Box>
                                <Text fw={700}>{item.name}</Text>
                                <Text>{item.position}</Text>
                              </Box>
                            </Group>
                            <CustomButton
                              color="black"
                              radius={"xl"}
                              to={`https://www.linkedin.com/in/kimmontano?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                            >
                              <Group>
                                <IconBrandLinkedin /> Let's Connect
                              </Group>
                            </CustomButton>
                          </Group>
                          <Text>{item.ceo_description}</Text>
                          <Text>{item.company_line}</Text>
                        </Stack>
                      ))}
                    </Flex>
                  </Box>
                )}
                {buttonText && (
                  <CustomButton
                    color={buttonColor ?? "black"}
                    radius={"xl"}
                    autoContrast
                    to={"/contact-us"}
                  >
                    {buttonText}
                  </CustomButton>
                )}
              </Stack>
            </Paper>
          </BackgroundImage>
        </Box>
      </Flex>

      <Flex w={"100%"} h={"100%"} hiddenFrom="md">
        <Box pos={"relative"}>
          <BackgroundImage src={leftSideImage} w={"100%"} h={"100%"}>
            <Paper
              radius={"none"}
              bg={rightColor}
              p={"xl"}
              opacity={opacity ?? 0.95}
              h={"100%"}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Stack gap={"sm"} w={"100%"} align={"start"}>
                <Title ta={"center"} order={2} fw={700}>
                  {title}
                </Title>
                <Text size={"xs"} ta={"center"}>
                  {description}
                </Text>
                {listData && (
                  <Box>
                    <Divider my={"xl"} color={"black"} />
                    <Flex direction={"column"} gap={"xl"}>
                      {listData.map((item, index) => (
                        <Stack key={index} gap={"md"}>
                          <Group justify={"space-between"}>
                            <Stack gap={"xs"}>
                              <Avatar
                                color="black"
                                size={"md"}
                                src={item.image ?? null}
                                style={{
                                  border: "1px solid black",
                                }}
                              />
                              <Box>
                                <Text size="sm" fw={700}>
                                  {item.name}
                                </Text>
                                <Text fw={200} size="xs">{item.position}</Text>
                              </Box>
                            </Stack>
                            <CustomButton
                              color="black"
                              radius={"xl"}
                              to={`https://www.linkedin.com/in/kimmontano?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                              size={"xs"}
                            >
                              <Group gap={"xs"}>
                                <IconBrandLinkedin size="20px" /><Text size='xs'>Let's Connect</Text>
                              </Group>
                            </CustomButton>
                          </Group>
                          <Text size="xs">{item.ceo_description}</Text>
                          <Text size="xs">{item.company_line}</Text>
                        </Stack>
                      ))}
                    </Flex>
                  </Box>
                )}
                {buttonText && (
                  <CustomButton
                    color={buttonColor ?? "black"}
                    radius={"xl"}
                    autoContrast
                    to={"/contact-us"}
                    mx={"auto"}
                    size={"xs"}
                  >
                    {buttonText}
                  </CustomButton>
                )}
              </Stack>
            </Paper>
          </BackgroundImage>
        </Box>
      </Flex>
    </>
  );
};

export default BannerWithOverlap;
