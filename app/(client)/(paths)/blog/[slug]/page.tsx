import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { BackgroundImage, Box, Paper, Stack, Text, Title, Container, Image, Group } from "@mantine/core"
import { PortableText } from "next-sanity"


const getSingleBlog = async (slug: string) => {
    const query = `*[slug.current=="${slug}"]{
        _id,
        title,
        image,
        date,
        body,
        slug{current}
    }[0]`

    return await client.fetch(query)
}

const page = async ({ params }: any) => {
    const { slug } = await params
    const blog = await getSingleBlog(slug)
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <Box>
            <BackgroundImage src={urlFor(blog.image).url()} h={"80vh"} visibleFrom="md">
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
                            <Title c={'white'} fw={700} size="54px">{blog.title}</Title>
                            <Text c={'white'} size="lg" fw={500}>{formatDate(blog.date)}</Text>
                        </Box >
                    </Stack>
                </Paper>
            </BackgroundImage>

            <BackgroundImage src={urlFor(blog.image).url()} h={"60vh"} hiddenFrom="md">
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
                            <Title c={'white'} fw={700} order={2}>{blog.title}</Title>
                            <Text c={'white'} size="xs" fw={500}>{formatDate(blog.date)}</Text>
                        </Group >
                    </Stack>
                </Paper>
            </BackgroundImage>

            <Container size="90%" py={'md'} hiddenFrom="md">
                <PortableText
                    value={blog.body}
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
                                    w={'100%'}
                                    mx={'auto'}
                                />
                            )
                        }
                    }} />
            </Container>






            <Container size="70%" py={'md'} visibleFrom="md">
                <PortableText
                    value={blog.body}
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
                    }} />
            </Container>
        </Box>
    )
}

export default page
