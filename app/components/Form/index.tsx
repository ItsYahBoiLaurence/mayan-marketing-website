import { BackgroundImage, Box, Button, Center, Checkbox, Paper, Stack, Text, Textarea, TextInput, Title } from '@mantine/core'
import React from 'react'

const index = () => {
    return (
        <BackgroundImage src='/formBg.jpeg' pos={'absolute'} bottom={'-50px'} h={'550px'} radius={'lg'}>
            <Paper p={'xl'} radius={'lg'} w={'100%'} h={'100%'} bg={'#EFEFEF'} opacity={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack w={'90%'} h={'80%'}>
                    <Title order={3} fw={500}>Let's talk about your business!</Title>
                    <form>
                        <Stack>
                            <Stack>
                                <TextInput placeholder='Enter your full name' label={<Text>What is your name?</Text>} />
                                <TextInput placeholder='Enter your email' label={<Text>Email</Text>} />
                                <Textarea placeholder='Please tell us what you are trying to achieve' label={<Text>Message</Text>} />
                            </Stack>
                            <Checkbox label={<Text size='xs'>By clicking the checkbox you agree to the Privacy Policy and terms of service </Text>} />
                            <Button variant='filled' color='#FBCA12' autoContrast>Submit</Button>
                        </Stack>
                    </form>
                </Stack>
            </Paper>
        </BackgroundImage>

    )
}

export default index
