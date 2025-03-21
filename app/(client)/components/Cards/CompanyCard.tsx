import { Avatar, Center, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import CustomButton from '../Button/CustomButton'

type CompanyCardProps = {
    image: string,
    name: string,
    description: string,
    link: string
}

const companies: CompanyCardProps[] = [{
    image: '/avatar1.jpeg',
    name: 'Positive Workplaces',
    description: 'Empowering organizations with digital solutions that enhance workplace culture and operational efficiency.',
    link: 'https://positiveworkplaces.org/'
},
{
    image: '/avatar2.jpeg',
    name: '6 Figure Grants',
    description: 'Providing seamless tech integration to support grant funding platforms and financial innovation.',
    link: 'https://6figuregrants.com/'
},
{
    image: '/avatar3.jpeg',
    name: 'Spurway Enterprise',
    description: 'Driving business transformation through custom technology solutions tailored for scalable growth.',
    link: 'https://spurway.com/'
},
]




const CompanyCard = () => {
    return (
        <Center w={'100%'} p={'md'} py={'xxl'}>
            <Stack align='center' gap={'lg'}>
                <Title ta={'center'} fw={700}>Trusted by High Caliber Local <br />and Global Clients</Title>
                <Text size='sm' w={'50%'} ta={'center'}>Businesses across industries rely on Mayan Solutions for strategic, results-driven technology solutions. Our expertise in aligning technology with measurable business goals has helped companies streamline operations, scale efficiently, and achieve impactful growth.</Text>
                <SimpleGrid cols={3}>
                    {
                        companies.map(({ image, name, description, link }: CompanyCardProps) => (
                            <Paper p='md' key={name} withBorder w={300} radius={'md'}>
                                <Stack key={name} align={'start'}>
                                    <Avatar src={image} size="lg" />
                                    <Text size="lg" fw={700}>{name}</Text>
                                    <Text size="xs">{description}</Text>
                                    <CustomButton radius={'xl'} color='royal_blue' c={'white'} to={link}>View Website</CustomButton>
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
