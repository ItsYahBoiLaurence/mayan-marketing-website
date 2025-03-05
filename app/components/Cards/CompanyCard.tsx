import { Avatar, Box, Center, Group, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import React from 'react'

type CompanyCardProps = {
    image: string,
    name: string,
    description: string,
}

const companies: CompanyCardProps[] = [{
    image: '/avatar1.jpeg',
    name: 'Positive Workplaces',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
},
{
    image: '/avatar2.jpeg',
    name: '6 Figure Grants',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
},
{
    image: '/avatar3.jpeg',
    name: 'Spurway Enterprise',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
},
]




const CompanyCard = () => {
    return (
        <Center w={'100%'} p={'md'}>
            <Stack>
                <Title ta={'center'} fw={700}>Trusted by High Caliber Local <br />and Global Players</Title>
                <SimpleGrid cols={3}>
                    {
                        companies.map(({ image, name, description }: CompanyCardProps) => (
                            <Paper p='md' key={name} withBorder w={300} radius={'md'}>
                                <Stack key={name}>
                                    <Avatar src={image} size="lg" />
                                    <Text size="lg" fw={700}>{name}</Text>
                                    <Text size="xs">{description}</Text>
                                </Stack>
                            </Paper>
                        ))
                    }
                </SimpleGrid>
            </Stack>
        </Center>
    )
}

export default CompanyCard
