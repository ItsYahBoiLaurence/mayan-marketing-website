import { BackgroundImage, Button, Paper, Stack, Text, Title } from '@mantine/core'
import React from 'react'

type SectionBannerType = {
    title: string,
    subDescription: string,
    buttonDesc?: string,
    bg: string,
    textColor?: string,
    opacity?: number,
}

const RightBanner = ({ title, subDescription, buttonDesc, bg, textColor, opacity }: SectionBannerType) => {
    return (
        <BackgroundImage src='/bgBanner.png' w={"100%"} h={"60vh"}>
            <Paper bg={bg} opacity={opacity ?? 0.97} h={'100%'} p='xxl' style={{ display: 'flex', alignItems: 'center' }}>
                <Stack w={'60%'}>
                    <Text size={"42px"} fw={700} c={textColor}>{title}</Text>
                    <Text size='sm' c={textColor}>{subDescription}</Text>
                    {buttonDesc && (<Button radius={'xl'} color='jonquil' c={'black'}>{buttonDesc}</Button>)}
                </Stack>
            </Paper>
        </BackgroundImage>
    )
}

export default RightBanner
