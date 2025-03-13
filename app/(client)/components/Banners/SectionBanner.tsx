import { BackgroundImage, Box, Flex, } from '@mantine/core'
import React from 'react'
import RightBanner from './RightBanner'

type SectionBannerType = {
    title: string,
    subDescription: string,
    buttonDesc?: string,
    image: string,
    textColor?: string,
}

const SectionBanner = ({ title, subDescription, buttonDesc, image, textColor }: SectionBannerType) => {
    return (
        <Flex w={'100%'} bg={'pink'}>
            <BackgroundImage src={image} style={{ flex: 0.60 }}></BackgroundImage>
            <Box style={{ flex: 0.40 }}>
                <RightBanner bg="#023DC5" title={title} subDescription={subDescription} buttonDesc={buttonDesc} textColor={textColor} />
            </Box>
        </Flex>
    )
}

export default SectionBanner
