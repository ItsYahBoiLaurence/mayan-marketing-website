"use client"
import { BackgroundImage, Box, Center, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import EmailForm from "../EmailForm/EmailForm";
import { IconFile, IconSquareRoundedCheck } from "@tabler/icons-react";
import { urlFor } from "@/sanity/lib/image";

interface SingleResearch {
    title: string
    image: string
    highlights: string[]
}

export default function ContentForm({ title, image, highlights }: SingleResearch) {

    const isMobile = useMediaQuery('(max-width: 62em)')

    return (
        <Flex justify={isMobile ? undefined : "center"} direction={isMobile ? "column" : undefined}>
            <Center bg={'rgba(248, 248, 248, 1)'} flex={.5} py={'lg'}>
                <Stack w={isMobile ? "90%" : "70%"}>
                    <Text size="lg" fw={700}>{title}</Text>
                    <Image src={urlFor(image).url()} />
                    {highlights.length > 0
                        ? (
                            <Stack>
                                <Group gap={0}>
                                    <IconFile stroke={2} style={{ color: 'black' }} />
                                    <Text size="xl" fw={700} >What's inside the PDF:</Text>
                                </Group>
                                {highlights.map((item: string, index: number) => (
                                    <Group key={index} gap={4}>
                                        <IconSquareRoundedCheck stroke={2} style={{ color: 'green' }} />
                                        <Text size={isMobile ? "xs" : undefined}>{item}</Text>
                                    </Group>
                                ))}
                            </Stack>
                        )
                        : <></>}
                </Stack>
            </Center>

            <Box flex={.5} >
                <BackgroundImage src="/formBg2.jpg" h={'100%'} >
                    <Center h={'100%'} bg='rgba(239, 239, 239, 1)' opacity={0.96} px={"lg"} py={isMobile ? "lg" : 'md'}>
                        <EmailForm documentTitle={title} />
                    </Center>
                </BackgroundImage>
            </Box>
        </Flex >
    )
}