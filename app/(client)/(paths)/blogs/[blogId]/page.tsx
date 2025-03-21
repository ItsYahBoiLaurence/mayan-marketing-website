import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { BackgroundImage, Box, Container, Flex, Image, Paper, Stack, Text, Title } from '@mantine/core'
import { PortableText } from '@portabletext/react'
import React from 'react'

const page = async ({ params }: any) => {
    const { blogId } = params
    console.log(blogId)

    const query = `*[_id == "${blogId}"]{
        title,
        image,
        date,
        body
    }[0]`
    const blog = await client.fetch(query)
    console.log(blog)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString('en-US', options)
    }
    console.log(blog.body)

    return (
        <div>
            <BackgroundImage src={urlFor(blog.image).url()} h={'80vh'}>
                <Paper style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)' }} w={'100%'} h={'100%'}>
                    <Container size={'80%'} h={'90%'} >
                        <Stack justify={'end'} align={'start'} w={'100%'} h={'100%'} py={'xl'}>
                            <Title order={1} fz={40} c={'white'} fw={700}>{blog.title}</Title>
                            <Text c={'white'} fw={500}>{formatDate(blog.date)}</Text>
                        </Stack>
                    </Container>
                </Paper>
            </BackgroundImage>
            <Container size={'60%'} h={'90%'}>
                <PortableText
                    value={blog.body}
                    components={{
                        block: {
                            normal: ({ children }) => (
                                <Text style={{ fontSize: '18px', lineHeight: '1.6', color: '#444', margin: '15px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Text>
                            ),
                            h1: ({ children }) => (
                                <Title order={1} style={{ fontSize: '36px', fontWeight: 700, color: '#0D60FF', margin: '25px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Title>
                            ),
                            h2: ({ children }) => (
                                <Title order={2} style={{ fontSize: '30px', fontWeight: 600, color: '#0D60FF', margin: '22px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Title>
                            ),
                            h3: ({ children }) => (
                                <Title order={3} style={{ fontSize: '26px', fontWeight: 600, color: '#0D60FF', margin: '20px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Title>
                            ),
                            h4: ({ children }) => (
                                <Title order={4} style={{ fontSize: '22px', fontWeight: 600, color: '#0D60FF', margin: '18px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Title>
                            ),
                            h5: ({ children }) => (
                                <Title order={5} style={{ fontSize: '20px', fontWeight: 600, color: '#0D60FF', margin: '16px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Title>
                            ),
                            h6: ({ children }) => (
                                <Title order={6} style={{ fontSize: '18px', fontWeight: 600, color: '#0D60FF', margin: '14px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </Title>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote style={{ fontStyle: 'italic', color: '#555', borderLeft: '4px solid #0D60FF', backgroundColor: '#f9f9f9', margin: '20px 0', padding: '15px 20px', borderRadius: '5px' }}>
                                    {children}
                                </blockquote>
                            ),
                            listItem: ({ children }) => (
                                <li style={{ margin: '8px 0', fontFamily: 'Arial, sans-serif' }}>
                                    {children}
                                </li>
                            ),
                        }
                    }}
                />
            </Container>
        </div>
    )
}

export default page
