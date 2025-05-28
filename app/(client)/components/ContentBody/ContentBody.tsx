"use client"
import { urlFor } from "@/sanity/lib/image";
import { Box, Container, Image, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { PortableText } from "next-sanity";

export default function ContentBody({ body }: { body: any }) {

    const isMobile = useMediaQuery('(max-width: 62em)')
    return (
        <Container size={isMobile ? "90%" : "70%"} py={'md'} >
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
                                        w={isMobile ? "90%" : '70%'}
                                        mx={'auto'}
                                    />
                                )
                            }
                        }}
                    />
                </Box>
            </Stack>
        </Container>
    )
}