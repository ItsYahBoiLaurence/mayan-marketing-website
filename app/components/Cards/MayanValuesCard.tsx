import React from 'react'
import { IconBulb, IconShieldPlus, IconPuzzle, IconHeartHandshake, IconTrendingUp } from '@tabler/icons-react';
import { Avatar, Box, Group, Paper, SimpleGrid, Text } from '@mantine/core';

const data = [
    {
        icon: <IconBulb />,
        title: "Wisdom",
        description: "We strive to bring new and creative ideas to life."
    },
    {
        icon: <IconShieldPlus />,
        title: "Reliability",
        description: "We prioritize the safety and security of our clients."
    },
    {
        icon: <IconPuzzle />,
        title: "Collaboration",
        description: "We believe in the power of working together."
    },
    {
        icon: <IconHeartHandshake />,
        title: "Collaboration",
        description: "We uphold honesty and strong moral principles."
    },
    {
        icon: <IconTrendingUp />,
        title: "Growth",
        description: "We are committed to continuous improvement and growth."
    }
]

const MayanValuesCard = () => {
    return (
        <SimpleGrid cols={2}>
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
