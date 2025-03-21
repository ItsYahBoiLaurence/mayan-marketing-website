import { client } from '@/sanity/lib/client'
import { Box, Grid, SimpleGrid, Text } from '@mantine/core'
import { Stack } from '@mantine/core'
import { BackgroundImage } from '@mantine/core'
import { Center } from '@mantine/core'
import React from 'react'
import BlogCard from '../../components/Cards/BlogCard/BlogCard'


const page = async () => {
    const query = `*[_type == "blogs"]{
    _id,
    title,
    image,
    date
    }`
    const blogs = await client.fetch(query)
    console.log(blogs)
    return (
        <div>
            <BackgroundImage src='/bannerOverlap.png' w={'100%'} h={'80vh'} mb={'60px'}>
                <Center h={'100%'} w={'100%'} bg={'#042161'} opacity={0.95}>
                    <Stack w={'40%'}>
                        <Text c={'#fff'} size='xs' tt={'uppercase'} ta={'center'}>Blogs</Text>
                        <Text size='48px' fw={700} c={'#fff'} ta={'center'}>Transforming Ideas Into Impactful Success Stories</Text>
                        <Box w={'60%'} mx={'auto'}>
                            <Text size='xs' c={'#fff'} ta={'center'}>Every Success starts with a idea. We turn vissions into reality, crafting experiences that inspire action, drive growth, and create lasting impact</Text>
                        </Box>
                    </Stack>
                </Center>
            </BackgroundImage>
            <SimpleGrid cols={2} w={'80%'} mx={'auto'}>
                {blogs.map((blog: any) => (
                    <BlogCard key={blog._id} id={blog._id} title={blog.title} img={blog.image} date={blog.date} />
                ))}
            </SimpleGrid>
        </div>
    )
}

export default page
