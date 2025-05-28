'use client'

import { urlFor } from "@/sanity/lib/image"
import { Card, CardSection, Image, SimpleGrid, Stack, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

interface ArrayObject {
    title: string
    slug: {
        current: string
    }
    image: string
}

export default function ({ arrayObject }: { arrayObject: ArrayObject[] }) {

    const isMobile = useMediaQuery('(max-width: 62em)')

    return (
        <SimpleGrid cols={isMobile ? 1 : 3} w={"90%"} mx={'auto'}>
            {arrayObject.map(({ title, slug, image }, index) => (
                <Card key={index} component="a" href={`/video-content/${slug.current}`}>
                    <CardSection h={250}>
                        <Image src={urlFor(image).url()} alt={title} h={'100%'} />
                    </CardSection>
                    <CardSection>
                        <Stack align="space-between" gap={'xs'}>
                            <Text size="lg" fw={700}>{title}</Text>
                        </Stack>
                    </CardSection>
                </Card>
            ))}
        </SimpleGrid>
    )
} 