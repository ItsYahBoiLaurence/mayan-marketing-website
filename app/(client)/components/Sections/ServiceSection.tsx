import { Box, Flex, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import ServiceCard from '../Cards/ServiceCard'


const services = [
    {
        id: 1,
        title: 'Analytics for employee well-being',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },
    {
        id: 2,
        title: 'Design and integration for success and bigger impact',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },
    {
        id: 3,
        title: 'Custom Web App Development Services',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },
    {
        id: 4,
        title: 'Tech Strategy powered by data and user feedback',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    },

]

const ServiceSection = () => {
    return (
        <Flex w={'80%'} mx={'auto'} p={'xl'} gap={'md'}>
            <Box >
                <Stack justify='start'>
                    <Title order={2} fw={700}>Your blueprint
                        for digital implementation, simplified.
                    </Title>
                    <Text size='xs'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    </Text>
                </Stack>
            </Box>
            <SimpleGrid cols={2} verticalSpacing={'xl'} spacing={'xl'}>
                {services.map(({ id, title, description }) => (
                    <ServiceCard key={id} id={id} title={title} description={description} />
                ))}
            </SimpleGrid>
        </Flex>

    )
}

export default ServiceSection
