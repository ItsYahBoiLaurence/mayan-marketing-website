import { BackgroundImage, Flex, } from '@mantine/core'
import React from 'react'
import RightBanner from './RightBanner'

type SectionBannerType = {
    title: string,
    subDescription: string,
    buttonDesc?: string,
    image: string,
}

const SectionBanner = ({ title, subDescription, buttonDesc, image }: SectionBannerType) => {
    return (
        <Flex>
            <BackgroundImage src={image}></BackgroundImage>
            <RightBanner title={title} subDescription={subDescription} buttonDesc={buttonDesc} />
        </Flex>
    )
}

export default SectionBanner
