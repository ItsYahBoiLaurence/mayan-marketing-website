import { Box, Button, Group, Image, Paper } from '@mantine/core'
import React from 'react'
import Text from '../MantineComponents/Text'
const Navbar = () => {
    return (
        <Group style={{ position: 'fixed', top: 0, zIndex: 1000, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.1)', }} w='100%' justify='space-around' p='md'>
            <Image
                radius="md"
                h={50}
                src="/favicon.png"
            />
            <Paper radius='xl' px='xl' py='sm' bg='#001B59'>
                <Group gap='xl'>
                    <Text>Our Services</Text>
                    <Text>Our Process</Text>
                    <Text>Case Studies</Text>
                    <Text>About Us</Text>
                    <Text>Contact Us</Text>
                </Group>
            </Paper>
            <Button size='md' radius='xl' color='white' variant='default'>Let's Talk</Button>
        </Group>
    )
}

export default Navbar
