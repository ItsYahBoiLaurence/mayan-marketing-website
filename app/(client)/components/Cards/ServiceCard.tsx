import { Avatar, BackgroundImage, ColorSwatch, Paper, Stack, Text } from '@mantine/core'
import { IconUser, IconPresentation, IconCpu2 } from '@tabler/icons-react'
import React from 'react'
type ServiceCardProps = {
    id: number
    title: string
    description: string
}

const ServiceCard = ({ title, description, id }: ServiceCardProps) => {
    return (
        <BackgroundImage src={'/serviceBg.png'} w={'100%'} h={'100%'}>
            <Paper p={'xl'} withBorder={true} bg={'#F6F6F6'} h={'100%'} opacity={0.95}>
                <Stack justify='center' gap={'xs'}>
                    {id == 1 ? <IconUser size={40} /> : id == 2 ? <IconPresentation size={40} /> : <IconCpu2 size={40} />}
                    <Text size='lg' fw={700}>{title}</Text>
                    <Text size='xs'>{description}</Text>
                </Stack>
            </Paper>
        </BackgroundImage >

    )
}

export default ServiceCard
