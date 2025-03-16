"use client"

import React from 'react'
import { Box, Card, CardSection, Flex, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

const StudyCard = ({ post }: { post: any }) => {
    const router = useRouter()
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder onClick={() => router.push(`/case-studies/${post._id}`)} h={'400px'}>
            <Stack justify='space-between' h={'100%'}>
                <Stack h={'40%'}>
                    <Text tt={'uppercase'} fw={300} size='xs'>case study</Text>
                    <Stack justify='center' h={'100%'}>
                        <Text fw={700} size='xl'>{post.title}</Text>
                    </Stack>
                </Stack>
                <CardSection h={'60%'}>
                    <Image h={'100%'} src={urlFor(post.image).url()} alt={post.title} />
                </CardSection>
            </Stack>
        </Card>
    )
}
export default StudyCard
