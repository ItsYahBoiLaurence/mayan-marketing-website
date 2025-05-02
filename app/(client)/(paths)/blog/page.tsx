import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { BackgroundImage, Box, Card, CardSection, Center, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core"

export const revalidate = 60

const getBlogs = async () => {
    const query = `*[_type == "blogs"]{
        title,
        image,
        date,
        slug{current}
        }`
    return await client.fetch(query)
}

const page = async () => {

    const transformDate = (isoDate: string) => {
        const date = new Date(isoDate)
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
        return date.toLocaleDateString('en-US', options);
    }

    const blogs = await getBlogs()
    console.log(blogs)

    return (
        <>
            <BackgroundImage
                src="/bannerOverlap.png"
                w={"100%"}
                h={"80vh"}
                visibleFrom="md"
                pos={'relative'}
                z-index={1}
            >
                <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
                    <Stack w={"40%"}>
                        <Text c={"#fff"} size="sm" tt={"uppercase"} ta={"center"}>
                            Blogs
                        </Text>
                        <Text size="72px" fw={700} c={"#fff"} ta={"center"}>
                            Read <span style={{ color: '#FFCE13' }}>Insight</span> to drive <span style={{ color: '#FFCE13' }}> <br />Real Growth</span>
                        </Text>
                        <Box w={"60%"} mx={"auto"}>
                            <Text size="md" c={"#fff"} ta={"center"}>
                                Explore expert perspectives, data-driven insights, and innovate strategies designed to scale your business, streamline operations, and maximize tech spend.
                            </Text>
                        </Box>
                    </Stack>
                </Center>
            </BackgroundImage>

            <BackgroundImage
                src="/bannerOverlap.png"
                w={"100%"}
                h={"60vh"}
                hiddenFrom="md"
                pos={'relative'}
                z-index={1}
            >
                <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.90}>
                    <Stack w={"100%"}>
                        <Text c={"#fff"} size="sm" tt={"uppercase"} ta={"center"}>
                            Blogs
                        </Text>
                        <Text size="36px" fw={700} c={"#fff"} ta={"center"}>
                            Read <span style={{ color: '#FFCE13' }}>Insights</span> to drive <span style={{ color: '#FFCE13' }}> <br />Real Growth</span>
                        </Text>
                        <Box w={"80%"} mx={"auto"}>
                            <Text size="md" c={"#fff"} ta={"center"}>
                                Explore expert perspectives, data-driven insights, and innovate strategies designed to scale your business, streamline operations, and maximize tech spend.
                            </Text>
                        </Box>
                    </Stack>
                </Center>
            </BackgroundImage>

            <SimpleGrid cols={3} w={"80%"} mx={"auto"} visibleFrom="md" mt={"-120px"} pos={'relative'}
                z-index={2}>
                {blogs.map(({ title, image, date, slug }: any, index: any) => (
                    <Card key={index} shadow="sm" padding="lg" radius="md" component="a" withBorder href={`/blog/${slug.current}`}>
                        <CardSection h={250}>
                            <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                        </CardSection>
                        <CardSection p={'lg'}>
                            <Stack align="space-between" gap={'xs'}>
                                <Text size="sm" c='dimmed'>{transformDate(date)}</Text>
                                <Text size="lg" fw={700}>{title}</Text>
                            </Stack>
                        </CardSection>
                    </Card>
                ))}
            </SimpleGrid>
            <SimpleGrid cols={1} w={'80%'} mx={'auto'} hiddenFrom="md" mt={"-80px"} pos={'relative'}
                z-index={2}>
                {blogs.map(({ title, image, date, slug }: any, index: any) => (
                    <Card key={index} shadow="sm" padding="lg" radius="md" component="a" withBorder href={`/blog/${slug.current}`}>
                        <CardSection h={250}>
                            <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                        </CardSection>
                        <CardSection p={'md'}>
                            <Stack gap={'xs'}>
                                <Text size="xs" c='dimmed'>{transformDate(date)}</Text>
                                <Text size="md" fw={700}>{title}</Text>
                            </Stack>
                        </CardSection>
                    </Card>
                ))}
            </SimpleGrid>
        </>
    )
}

export default page
