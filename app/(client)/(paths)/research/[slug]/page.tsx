import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BackgroundImage, Box, Button, Center, Container, Flex, Group, Image, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { PortableText } from "next-sanity";
import DownloadButton from '../../../components/Button/DownloadButton'
import { IconDownload, IconFile, IconSend } from '@tabler/icons-react';
import { IconSquareRoundedCheck } from '@tabler/icons-react';
import EmailForm from "@/app/(client)/components/EmailForm/EmailForm";

const getSingleResearch = async (slug: string) => {
    const query = `*[slug.current=="${slug}"]{
        _id,
        title,
        slug,
        image,
        body,
        highlights,
        file{
            asset->{
            _id,
            url,
            originalFilename,
            size
            }
        }
    }[0]`
    return await client.fetch(query)
}


export default async function page({ params }: any) {

    const { slug } = await params

    const singleResearch = await getSingleResearch(slug)

    const { title, image, body, highlights, file } = singleResearch

    console.log(file)

    return (

        <Box>
            <BackgroundImage src={urlFor(image).url()} h={"80vh"} visibleFrom="md">
                <Paper
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                    w={"100%"}
                    h={"100%"}
                >
                    <Stack h={'100%'} align="start" justify="end" w={'70%'} mx={'auto'} py={'lg'}>
                        <Box mb={'lg'}>
                            <Title c={'white'} fw={700} size="54px">{title}</Title>
                        </Box >
                    </Stack>
                </Paper>
            </BackgroundImage>

            <BackgroundImage src={urlFor(image).url()} h={"60vh"} hiddenFrom="md">
                <Paper
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                    w={"100%"}
                    h={"100%"}
                >
                    <Stack h={'100%'} align="start" justify="end" w={'90%'} mx={'auto'} py={'lg'}>
                        <Group mb={'lg'}>
                            <Title c={'white'} fw={700} order={2}>{title}</Title>
                        </Group >
                    </Stack>
                </Paper>
            </BackgroundImage>

            <Container size="70%" py={'md'} visibleFrom="md">
                <Stack my={"16px"}>
                    <Title fw={500}>Summary</Title>
                    <Box>
                        <PortableText
                            value={body}
                            components={{
                                block: {
                                    normal: ({ children }) => (
                                        <Text
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "1.6",
                                                color: "#444",
                                                margin: "15px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Text>
                                    ),
                                    h1: ({ children }) => (
                                        <Title
                                            order={1}
                                            style={{
                                                fontSize: "36px",
                                                fontWeight: 700,
                                                color: "#0D60FF",
                                                margin: "25px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Title>
                                    ),
                                    h2: ({ children }) => (
                                        <Title
                                            order={2}
                                            style={{
                                                fontSize: "30px",
                                                fontWeight: 600,
                                                color: "#0D60FF",
                                                margin: "22px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Title>
                                    ),
                                    h3: ({ children }) => (
                                        <Title
                                            order={3}
                                            style={{
                                                fontSize: "26px",
                                                fontWeight: 600,
                                                color: "#0D60FF",
                                                margin: "20px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Title>
                                    ),
                                    h4: ({ children }) => (
                                        <Title
                                            order={4}
                                            style={{
                                                fontSize: "22px",
                                                fontWeight: 600,
                                                color: "#0D60FF",
                                                margin: "18px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Title>
                                    ),
                                    h5: ({ children }) => (
                                        <Title
                                            order={5}
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: 600,
                                                color: "#0D60FF",
                                                margin: "16px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Title>
                                    ),
                                    h6: ({ children }) => (
                                        <Title
                                            order={6}
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: 600,
                                                color: "#0D60FF",
                                                margin: "14px 0",
                                                fontFamily: "Arial, sans-serif",
                                            }}
                                        >
                                            {children}
                                        </Title>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote
                                            style={{
                                                fontStyle: "italic",
                                                color: "#555",
                                                borderLeft: "4px solid #0D60FF",
                                                backgroundColor: "#f9f9f9",
                                                margin: "20px 0",
                                                padding: "15px 20px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {children}
                                        </blockquote>
                                    ),
                                    listItem: ({ children }) => (
                                        <li
                                            style={{ margin: "0 200px", fontFamily: "Arial, sans-serif" }}
                                        >
                                            {children}
                                        </li>
                                    ),
                                },
                                types: {
                                    image: ({ value }) => (
                                        <Image
                                            src={urlFor(value).url()}
                                            alt={value.alt || "Blog Image"}
                                            w={'70%'}
                                            mx={'auto'}
                                        />
                                    )
                                }
                            }}
                        />
                    </Box>
                </Stack>
            </Container>


            <Flex justify="center" visibleFrom="md">
                <Center bg={'rgba(248, 248, 248, 1)'} flex={.5} py={'lg'}>
                    <Stack w={"70%"}>
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
                                            <Text>{item}</Text>
                                        </Group>
                                    ))}
                                </Stack>
                            )
                            : <></>}
                    </Stack>
                </Center>

                <Box flex={.5} >
                    <BackgroundImage src="/formBg2.jpg" h={'100%'}>
                        <Center h={'100%'} bg='rgba(239, 239, 239, 1)' opacity={0.96}>
                            <EmailForm documentTitle={title} />
                        </Center>
                    </BackgroundImage>
                </Box>
            </Flex >
            <Flex direction='column' hiddenFrom="md">
                <Center bg={'rgba(248, 248, 248, 1)'} flex={.5} py={'lg'}>
                    <Stack p={'md'}>
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
                                        <Group key={index}>
                                            <IconSquareRoundedCheck stroke={2} style={{ color: 'green' }} />
                                            <Text size="xs">{item}</Text>
                                        </Group>
                                    ))}
                                </Stack>
                            )
                            : <></>}
                    </Stack>
                </Center>

                <Box flex={.5}>
                    <BackgroundImage src="/formBg2.jpg" h={'100%'}>
                        <Center h={'100%'} bg='rgba(239, 239, 239, 1)' opacity={0.96} p={'lg'}>
                            <EmailForm documentTitle={title} />
                        </Center>
                    </BackgroundImage>
                </Box>
            </Flex >
        </Box >
    )
}