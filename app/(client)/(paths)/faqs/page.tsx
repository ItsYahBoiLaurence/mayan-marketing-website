import { BackgroundImage, Box, Center, Container, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import Accordion from '../../components/Accordion'
import { client } from '@/sanity/lib/client'

const getAllFaqs = async () => {
    const query = `*[_type=="faqs"]{
    question,
    category,
    answer
    }`
    return await client.fetch(query)
}

interface FAQs {
    question: string
    category: string
    answer: string
}


const page = async () => {
    const faqs = await getAllFaqs()
    return (
        <>
            <BackgroundImage
                src="/faqs.jpeg"
                w={"100%"}
                h={"60vh"}
                mb={"60px"}
                visibleFrom="md"
                pos='relative'
                z-index={1}
            >
                <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.90}>
                    <Stack w={"40%"}>
                        <Text c={"#fff"} size="sm" tt={"uppercase"} ta={"center"}>
                            Let us Guide You
                        </Text>
                        <Text size="72px" fw={700} c={"#fff"} ta={"center"}>
                            <span style={{ color: '#FFCE13' }}>Frequently</span> Asked <br />Question
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
                src="/faqs.jpeg"
                w={"100%"}
                h={"60vh"}
                mb={"60px"}
                hiddenFrom="md"
                pos='relative'
                z-index={1}
            >
                <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.90}>
                    <Stack w={"100%"} gap={'xs'}>
                        <Text c={"#fff"} size="xs" tt={"uppercase"} ta={"center"}>
                            Let us Guide You
                        </Text>
                        <Title fw={700} c={"#fff"} ta={"center"}>
                            <span style={{ color: '#FFCE13' }}>Frequently</span> Asked <br />Question
                        </Title>
                        <Box w={"60%"} mx={"auto"}>
                            <Text size="xs" c={"#fff"} ta={"center"}>
                                Explore expert perspectives, data-driven insights, and innovate strategies designed to scale your business, streamline operations, and maximize tech spend.
                            </Text>
                        </Box>
                    </Stack>
                </Center>
            </BackgroundImage>

            <Container mt={'-120px'} pos='relative'
                z-index={1}>
                <Stack gap={'md'}>
                    {faqs.map((item: FAQs, index: number) => (
                        <Accordion {...item} key={index} />
                    ))}
                </Stack>
            </Container>
        </>
    )
}
export default page
