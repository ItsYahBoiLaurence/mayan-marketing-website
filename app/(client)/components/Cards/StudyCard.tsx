"use client"

import React from 'react'
import { Box, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import { urlFor } from '@/sanity/lib/image'

const StudyCard = ({ post }: { post: any }) => {

    return (
        <Paper radius={'md'} shadow='md' key={post._id} withBorder bg={'#EFEFEF'}>
            <Stack p={'md'}>
                <Text tt={'uppercase'} fw={300} size='xs'>case study</Text>
                <Text fw={700} size='xl'>{post.title}</Text>
            </Stack>
            <Image src={urlFor(post.image).url()} alt={post.title} />
        </Paper>
    )
}

export default StudyCard
