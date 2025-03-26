import { BackgroundImage, Box, Center, SimpleGrid, Stack, Text } from '@mantine/core'
import React from 'react'
import StudyCard from '@/app/(client)/components/Cards/StudyCard'
import { client } from '@/sanity/lib/client'

interface Post {
    _id: string;
    title: string;
    image: string;
    slug: {
        current: string;
    };
}

async function getPosts() {
    const query = `*[_type == "studies"]`
    return await client.fetch(query)
}

const page = async () => {

    const post = await getPosts()

    return (
        <div>
            <>
                <BackgroundImage src='/bannerOverlap.png' w={'100%'} h={'80vh'} mb={'60px'}>
                    <Center h={'100%'} w={'100%'} bg={'#042161'} opacity={0.95}>
                        <Stack w={'40%'}>
                            <Text c={'#fff'} size='xs' tt={'uppercase'} ta={'center'}>Case Studies</Text>
                            <Text size='48px' fw={700} c={'#fff'} ta={'center'}>Transforming Ideas Into Impactful Success Stories</Text>
                            <Box w={'60%'} mx={'auto'}>
                                <Text size='xs' c={'#fff'} ta={'center'}>Every Success starts with a idea. We turn vissions into reality, crafting experiences that inspire action, drive growth, and create lasting impact</Text>
                            </Box>
                        </Stack>
                    </Center>
                </BackgroundImage>
                <Box my={'md'} w={'80%'} mx={'auto'}>
                    <SimpleGrid cols={3} verticalSpacing={'md'}>
                        {post.map((post: Post) => (
                            <StudyCard key={post._id} post={post} />
                        ))}
                    </SimpleGrid>
                </Box>
            </>
        </div>
    )
}

export default page
