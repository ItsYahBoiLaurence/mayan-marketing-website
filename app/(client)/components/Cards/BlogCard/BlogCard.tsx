import { AspectRatio, Card, Image, Paper, Text } from '@mantine/core'
import React from 'react'
import classes from './BlogCard.module.css'
import { urlFor } from '@/sanity/lib/image'
type BlogCardProps = {
    title: string
    img: string
    date: string
    id: string
}

const BlogCard = ({ title, img, date, id }: BlogCardProps) => {
    return (
        <Card key={title} p="md" radius="md" component="a" href={`/blogs/${id}`} className={classes.card} withBorder shadow="sm">
            <AspectRatio ratio={1920 / 1080}>
                <Image src={urlFor(img).url()} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {date}
            </Text>
            <Text className={classes.title} mt={5}>
                {title}
            </Text>
        </Card>
    )
}
export default BlogCard
