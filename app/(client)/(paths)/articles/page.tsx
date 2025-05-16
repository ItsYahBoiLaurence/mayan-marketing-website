import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BackgroundImage, Box, Card, CardSection, Center, Flex, Group, Image, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export const revalidate = 60

const fetchFromSanity = async (query: string) => {
    return client.fetch(query)
}

type BlogType = {
    image: Object,
    slug: {
        _type: string,
        current: string
    },
    title: string
}

async function Blog() {
    const query = `*[_type=="blogs"]{
    image,
    slug,
    title,
    }[0...3]`

    const blog: BlogType[] = await fetchFromSanity(query)

    if (blog.length === 0) return <>asd</>

    return (
        <>
            <Box w={'90%'} mx={'auto'} visibleFrom="md">
                <Stack gap={'lg'}>
                    <Box w={"70%"}>
                        <Title fw={700}>Strategic Resources for Tech Leaders</Title>
                        <Text>Access comprehensive whitepapers, actionable frameworks, and exclusive playbooks designed to help decision-makers navigate complex digital ecosystems and lead with confidence.</Text>
                    </Box>
                    <SimpleGrid cols={3}>
                        {blog.map(({ title, slug, image }, index: number) => (
                            <Card key={index} shadow="sm" padding="lg" radius="md" component="a" withBorder href={`/blog/${slug.current}`}>
                                <CardSection h={250}>
                                    <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                                </CardSection>
                                <CardSection p={'lg'}>
                                    <Stack align="space-between" gap={'xs'}>
                                        <Text size="lg" fw={700}>{title}</Text>
                                    </Stack>
                                </CardSection>
                            </Card>
                        ))}
                    </SimpleGrid>
                    <Center>
                        <Box component="a" href="/blog" style={{ textDecoration: 'none' }}>
                            <Group gap={0} justify="center" align="center">
                                <Text size="lg" c={'black'}>Learn More</Text>
                                < IconArrowNarrowRight stroke={2} size={32} style={{ color: 'black' }} />
                            </Group>
                        </Box>
                    </Center>
                </Stack>
            </Box>
            <Box w={'90%'} mx={'auto'} hiddenFrom="md">
                <Stack gap={'lg'}>
                    <Stack>
                        <Title fw={700}>Strategic Resources for Tech Leaders</Title>
                        <Text>Access comprehensive whitepapers, actionable frameworks, and exclusive playbooks designed to help decision-makers navigate complex digital ecosystems and lead with confidence.</Text>
                    </Stack>
                    <SimpleGrid cols={1}>
                        {blog.map(({ title, slug, image }, index: number) => (
                            <Card key={index} shadow="sm" padding="lg" radius="md" component="a" withBorder href={`/blog/${slug.current}`}>
                                <CardSection h={250}>
                                    <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                                </CardSection>
                                <CardSection p={'lg'}>
                                    <Stack align="space-between" gap={'xs'}>
                                        <Text size="lg" fw={700}>{title}</Text>
                                    </Stack>
                                </CardSection>
                            </Card>
                        ))}
                    </SimpleGrid>
                    <Center>
                        <Box component="a" href="/blog" style={{ textDecoration: 'none' }}>
                            <Group gap={0} justify="center" align="center">
                                <Text size="lg" c={'black'}>Learn More</Text>
                                < IconArrowNarrowRight stroke={2} size={32} style={{ color: 'black' }} />
                            </Group>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </>
    )
}

async function GatedContent() {
    const query = `*[_type=="gatedContent"]{
    image,
    slug,
    title,
    }[0...3]`

    const blog: BlogType[] = await fetchFromSanity(query)

    if (blog.length === 0) return <></>

    return (
        <>
            <Box w={'90%'} mx={'auto'} visibleFrom="md">
                <Stack gap={'lg'}>
                    <Box w={"70%"}>
                        <Title fw={700}>Driving Digitals Transformation at Scale</Title>
                        <Text>Explore how we’ve helped forward-thinking organizations modernize legacy systems, enhance operational efficiency, and unlock sustainable growth through tailored, strategic technology consulting.</Text>
                    </Box>
                    <SimpleGrid cols={3}>
                        {blog.map(({ title, slug, image }, index: number) => (
                            <Card key={index} shadow="sm" padding="lg" radius="md" component="a" withBorder href={`/research/${slug.current}`}>
                                <CardSection h={250}>
                                    <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                                </CardSection>
                                <CardSection p={'lg'}>
                                    <Stack align="space-between" gap={'xs'}>
                                        <Text size="lg" fw={700}>{title}</Text>
                                    </Stack>
                                </CardSection>
                            </Card>
                        ))}
                    </SimpleGrid>
                    <Center>
                        <Box component="a" href="/research" style={{ textDecoration: 'none' }}>
                            <Group gap={0} justify="center" align="center">
                                <Text size="lg" c={'black'}>Learn More</Text>
                                < IconArrowNarrowRight stroke={2} size={32} style={{ color: 'black' }} />
                            </Group>
                        </Box>
                    </Center>
                </Stack>
            </Box>
            <Box w={'90%'} mx={'auto'} hiddenFrom="md">
                <Stack gap={'lg'}>
                    <Stack >
                        <Title fw={700}>Driving Digital Transformation at Scale</Title>
                        <Text >Explore how we’ve helped forward-thinking organizations modernize legacy systems, enhance operational efficiency, and unlock sustainable growth through tailored, strategic technology consulting.</Text>
                    </Stack>
                    <SimpleGrid cols={1}>
                        {blog.map(({ title, slug, image }, index: number) => (
                            <Card key={index} shadow="sm" padding="lg" radius="md" component="a" withBorder href={`/research/${slug.current}`}>
                                <CardSection h={250}>
                                    <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                                </CardSection>
                                <CardSection p={'lg'}>
                                    <Stack align="space-between" gap={'xs'}>
                                        <Text size="lg" fw={700}>{title}</Text>
                                    </Stack>
                                </CardSection>
                            </Card>
                        ))}
                    </SimpleGrid>
                    <Center>
                        <Box component="a" href="/research" style={{ textDecoration: 'none' }}>
                            <Group gap={0} justify="center" align="center">
                                <Text size="lg" c={'black'}>Learn More</Text>
                                < IconArrowNarrowRight stroke={2} size={32} style={{ color: 'black' }} />
                            </Group>
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </>
    )
}


export default function page() {
    return (
        <>
            <BackgroundImage
                src="/Article.jpg"
                w={"100%"}
                h={"60vh"}
                mb={"60px"}
                visibleFrom="md"
            >
                <Paper h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
                    <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                        <Stack ta={'center'} w={"45%"}>
                            <Text c='white' size="sm" tt="uppercase" fw={700} >[Strategy & Insights]</Text>
                            <Text c='white' fw={700} size={"48px"}>Where <span style={{ color: 'rgba(255, 186, 0, 1)' }} >Strategy</span> Meets <span style={{ color: 'rgba(255, 186, 0, 1)' }}>Result</span></Text>
                            <Text c='white'>Discover how today’s most innovative companies are turning strategy into execution. From in-depth case studies to expert-driven blogs and exclusive resources, explore the ideas, frameworks, and real-world results that are shaping the future of modern enterprise.</Text>
                        </Stack>
                    </Flex>
                </Paper>
            </BackgroundImage>

            <BackgroundImage
                src="/Article.jpg"
                w={"100%"}
                h={"60vh"}
                mb={"60px"}
                hiddenFrom="md"
            >
                <Paper h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
                    <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                        <Stack ta={'center'}>
                            <Text c='white' size="sm" tt="uppercase" fw={700} >[Strategy & Insights]</Text>
                            <Text c='white' fw={700} size={"48px"}>Where <span style={{ color: 'rgba(255, 186, 0, 1)' }} >Strategy</span> Meets <span style={{ color: 'rgba(255, 186, 0, 1)' }}>Result</span></Text>
                            <Text c='white'>Discover how today’s most innovative companies are turning strategy into execution. From in-depth case studies to expert-driven blogs and exclusive resources, explore the ideas, frameworks, and real-world results that are shaping the future of modern enterprise.</Text>
                        </Stack>
                    </Flex>
                </Paper>
            </BackgroundImage>
            <Stack>
                <Blog />
                <GatedContent />
            </Stack>
        </>
    )
}