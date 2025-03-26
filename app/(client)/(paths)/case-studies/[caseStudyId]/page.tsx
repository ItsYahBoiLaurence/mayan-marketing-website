import React from 'react'
import { Box, Title } from '@mantine/core'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

const CaseStudyPage = async ({ params }: any) => {
    const { caseStudyId } = await params

    const query = `*[_type == "studies" && _id == "${caseStudyId}"][0]`
    const post = await client.fetch(query)
    return (
        <Box w={'80%'} mx={'auto'} >
            <Title mt={'100px'} order={1} fw={700}>{post.title}</Title>
            <PortableText value={post.content} />
        </Box>
    )
}

export default CaseStudyPage