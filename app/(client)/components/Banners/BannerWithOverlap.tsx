import {
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
        <Box h={"100%"} py={"xl"} flex={0.6}>
          <Image src={leftSideImage} alt="logo" />
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
                              to={`/about-us/${item.name}`}
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
                          <Group gap={"xs"} justify={"space-between"}>
                            <Group gap={"xs"}>
                              <Avatar
                                color="black"
                                size={"lg"}
                                src={item.image ?? null}
                              />
                              <Box>
                                <Text size="sm" fw={700}>
                                  {item.name}
                                </Text>
                                <Text size="xs">{item.position}</Text>
                              </Box>
                            </Group>
                            <CustomButton
                              color="black"
                              radius={"xl"}
                              to={`https://www.linkedin.com/in/kimmontano?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`}
                              size={"xs"}
                            >
                              <Group>
                                <IconBrandLinkedin /> Let's Connect
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
