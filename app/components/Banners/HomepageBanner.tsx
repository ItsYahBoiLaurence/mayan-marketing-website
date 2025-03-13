import { BackgroundImage, Button, Center, Group, Paper, Stack, Text, Title } from '@mantine/core'
import React from 'react'

const HomepageBanner = () => {
    return (
        <BackgroundImage
            src="/homepage_banner.png"
            h='100vh'
        >
            <Paper h='100vh' bg={'#042161'} opacity={0.95}>
                <Center h='90%'>
                    <Stack align="center">
                        <Text ta="center" size="sm" c='white'>Keep Moving Forward.</Text>
                        <Title ta="center" size="54px" fw={700} c="white" >{"Let's scale your "}<br /> business  <span style={{ color: "#FFCD15" }}>together</span></Title>
                        <Text ta="center" size="md" c="white">15 L years of combined experience refined to help <br /> you maximize {"technology's"} full potential.</Text>
                        <Group>
                            <Button radius={'xl'} variant="filled" color="#0D60FF" px={'lg'}>Learn More</Button>
                            <Button radius={'xl'} variant="outline" color="white" px={'lg'}>Learn More</Button>
                        </Group>
                    </Stack>
                </Center >
            </Paper>
        </BackgroundImage >
    )
}

export default HomepageBanner
