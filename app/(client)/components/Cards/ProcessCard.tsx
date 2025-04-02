import { urlFor } from '@/sanity/lib/image'
import { Avatar, Card, Image, Stack, Text } from '@mantine/core'
import React from 'react'

interface ProcessCardProps {
    title: string
    description: string
    image: string
}

const ProcessCard = ({ title, description, image }: ProcessCardProps) => {
    return (
        <Card withBorder p={'lg'}>
            <Stack gap={'sm'}>
                <Avatar variant="transparent" radius={'xs'}>
                    <Image src={urlFor(image).url()} />
                </Avatar>
                <Text size="lg" fw={700}>
                    {title}
                </Text>
                <Text size="xs">{description}</Text>
            </Stack>
        </Card>
    )
}

export default ProcessCard
