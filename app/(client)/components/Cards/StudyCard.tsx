"use client"

import React from 'react'
import { Card, CardSection, Image, Stack, Text } from '@mantine/core'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

interface Post {
    _id: string;
    title: string;
    image: string;
    slug: {
        current: string;
    };
}

const StudyCard = ({ post }: { post: Post }) => {
    return (
        <Link href={`/case-studies/${post._id}`}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={'400px'}>
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
        </Link>

    )
}
export default StudyCard
