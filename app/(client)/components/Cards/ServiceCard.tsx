import { ColorSwatch, Paper, Stack, Text } from '@mantine/core'
import React from 'react'

type ServiceCardProps = {
    title: string
    description: string
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
    return (
        <Paper>
            <Stack justify='center' gap={'xs'}>
                <ColorSwatch color={'#EBEBEB'} withShadow={false} />
                <Text size='lg' fw={700}>{title}</Text>
                <Text size='xs'>{description}</Text>
            </Stack>
        </Paper>
    )
}

export default ServiceCard
