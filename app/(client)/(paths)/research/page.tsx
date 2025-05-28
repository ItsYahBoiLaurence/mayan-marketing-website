import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BackgroundImage, Box, Button, Center, Flex, Group, Image, Paper, Stack, Text, Title, Card, SimpleGrid, CardSection } from "@mantine/core";
import ContentCard from "../../components/Cards/ContentCard/ContentCard";
import { ArrayObject } from "@/app/types/ContentTypes";

export const revalidate = 60

const getResearch = async (): Promise<ArrayObject[]> => {
    const query = `*[_type == "gatedContent"]{
        _id,
        title,
        slug,
        image,
    }`
    return await client.fetch(query)
}

export default async function page() {

    const research = await getResearch()
    console.log(research)
    return (
        <Box w={'100%'}>
            <>
                <BackgroundImage
                    src="/bgBanner.png"
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
                    src="/bgBanner.png"
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
            </>
            <ContentCard path={'research'} arrayObject={research} />
        </Box>
    )
}