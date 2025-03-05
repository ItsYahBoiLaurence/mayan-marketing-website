import { BackgroundImage, Button, Paper, Stack, Text, Title } from '@mantine/core'
import React from 'react'

type SectionBannerType = {
    title: string,
    subDescription: string,
    buttonDesc?: string,
}

const RightBanner = ({ title, subDescription, buttonDesc }: SectionBannerType) => {
    return (
        <BackgroundImage src='/bgBanner.png' w={"70%"} h={"60vh"}>
            <Paper bg='#023DC5' opacity={0.97} h={'100%'} p='xxl' style={{ display: 'flex', alignItems: 'center' }}>
                <Stack w={'60%'}>
                    <Title order={1} fw={700} c={'white'}>{title}</Title>
                    <Text size='xs' c={'white'}>{subDescription}</Text>
                    {buttonDesc && (<Button radius={'xl'} color='jonquil' c={'black'}>{buttonDesc}</Button>)}
                </Stack>
            </Paper>
        </BackgroundImage>
    )
}

export default RightBanner
