import React from 'react'
import { IconBulb, IconShieldPlus, IconPuzzle, IconHeartHandshake, IconTrendingUp } from '@tabler/icons-react';
import { Avatar, Group, Paper, SimpleGrid, Text } from '@mantine/core';

const data = [
    {
        icon: <IconBulb />,
        title: "Pride",
        description: "I take pride in the work that I have done, not myself."
    },
    {
        icon: <IconShieldPlus />,
        title: "Happiness",
        description: "I find happiness in one’s work and work environment"
    },
    {
        icon: <IconPuzzle />,
        title: "Resourcefulness",
        description: "I shamelessly copy what works "
    },
    {
        icon: <IconTrendingUp />,
        title: "Showmanship",
        description: "I always go for WOW"
    },
    {
        icon: <IconTrendingUp />,
        title: "Efficiency",
        description: "I ruthlessly remove what doesn’t work"
    },
    {
        icon: <IconTrendingUp />,
        title: "Belongingness",
        description: "I am part of Mayan and Mayan is a part of me"
    },
]

const MayanValuesCard = () => {
    return (
        <SimpleGrid cols={2} flex={0.6} verticalSpacing={'lg'} spacing={'lg'}>
            {data.map((item, index) => (
                <Paper key={index} bg={'#F6F6F6'} radius={'md'} w={'100%'} p={'xl'}>
                    <Group mb="md">
                        <Avatar color="black" radius="xl">
                            {item.icon}
                        </Avatar>
                        <Text fw={700}>{item.title}</Text>
                    </Group>
                    <Text>{item.description}</Text>
                </Paper>
            ))}
        </SimpleGrid>
    )
}

export default MayanValuesCard
