import { BackgroundImage, Box, Card, ColorSwatch, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import React from 'react'

const FeatureCard = () => {

    const features = [
        {
            id: 1,
            catching_text: '15+',
            catching_text_desc: 'Years of Product Experience',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
        },
        {
            id: 2,
            catching_text: '500%',
            catching_text_desc: 'of Average ROI for our clients',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
        },
        {
            id: 3,
            catching_text: '₱100+',
            catching_text_desc: 'Million of Tech Built',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
        },
    ]

    const getColor = (num: number): string => {
        const colors = ['#FFCE13', '#0D60FF', '#EFEFEF'];
        return colors[num % 3];
    }

    const getImage = (num: number): string => {
        const images = ['/cardBanner1.png', '/cardBanner2.png', '/cardBanner3.png'];
        return images[num % 3];
    }
    const getTextColor = (num: number): string => {
        const colors = ['#000000', '#FFFFFF', '#000000'];
        return colors[num % 3];
    }

    return (
        <SimpleGrid cols={3}>
            {features.map((feature, index) => (
                <BackgroundImage src={getImage(index)} radius={'md'} key={index}>
                    <Paper radius={'md'} w={'100%'} h={'100%'} bg={getColor(index)} opacity={0.95} py={'xl'} px={'lg'}>
                        <Stack gap={'md'}>
                            <ColorSwatch color='#FFFFFF' withShadow={false} size={50} />
                            <Box>
                                <Title c={getTextColor(index)} fw={700}>{feature.catching_text}</Title>
                                <Text c={getTextColor(index)} fw={300}>{feature.catching_text_desc}</Text>
                            </Box>
                            <Text c={getTextColor(index)} fw={300}>{feature.description}</Text>
                        </Stack>
                    </Paper>
                </BackgroundImage>
            ))}
        </SimpleGrid>
    )
}

export default FeatureCard