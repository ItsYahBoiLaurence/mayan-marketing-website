import { Avatar, BackgroundImage, Box, Button, Center, Divider, Flex, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';
import React from 'react'

type BannerWithOverlapProps = {
    leftSideImage: string;
    rightSideImage: string;
    title: string;
    description: string;
    buttonText?: string;
    listData?: {
        image?: string;
        name: string;
        position: string;
    }[];
    opacity?: number;
    rightColor?: string;
    buttonColor?: string;
}
const BannerWithOverlap = ({ leftSideImage, rightSideImage, title, description, buttonText, listData, opacity, rightColor, buttonColor }: BannerWithOverlapProps) => {
    return (
        <Flex w={'100%'} h={'100%'}>
            <Box h={'100%'} py={'xl'}>
                <Image src={leftSideImage} />
            </Box>
            <Box pos={'relative'}>
                <BackgroundImage src={rightSideImage} w={'100%'} h={'100%'}>
                    <Paper radius={"none"} bg={rightColor} p={'xl'} opacity={opacity ?? 0.95} h={'100%'} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Stack gap={'sm'}>
                            <Title fw={700}>{title}</Title>
                            <Text>{description}</Text>
                            {listData && (
                                <Box>
                                    <Divider my={'xl'} color={'black'} />
                                    <Flex direction={'column'} gap={'xl'}>
                                        {listData.map((item, index) => (
                                            <Group key={index} gap={'lg'}>
                                                <Avatar color='black' size={'lg'} src={item.image ?? null} />
                                                <Box>
                                                    <Text fw={700}>{item.name}</Text>
                                                    <Text>{item.position}</Text>
                                                </Box>
                                            </Group>
                                        ))}
                                    </Flex>
                                </Box>
                            )}


                            {buttonText && <Button color={buttonColor ?? 'black'} autoContrast>{buttonText}</Button>}
                        </Stack>
                    </Paper>
                </BackgroundImage>
            </Box>
        </Flex>
    )
}

export default BannerWithOverlap
