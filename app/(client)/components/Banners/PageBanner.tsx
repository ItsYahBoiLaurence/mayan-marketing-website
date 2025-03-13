import { BackgroundImage, Box, Button, Center, Flex, Group, Image, Paper, Stack, Title, Text } from '@mantine/core'
import React from 'react'

const PageBanner = () => {
    return (
        <BackgroundImage src='/bgBanner.png' w={'100%'} h={'80vh'} mb={'60px'}>
            <Paper h={"100%"} w={"100%"} bg={'#042161'} opacity={0.95}>
                <Flex w={"100%"} h={'100%'} justify={'center'} align={'center'}>
                    <Box style={{ flex: 0.5 }} h={'100%'}>
                        <Center h={'100%'} px={'xl'}>
                            <Stack w={'80%'}>
                                <Text size='sm' c={'#fff'} fw={700}>[ ABOUT US ]</Text>
                                <Title c={'#fff'} fw={700}>Mayan Solutions is a Digital Transformation
                                    Consulting Firm</Title>
                                <Text size='md' c={'#fff'}>Founded by visionaries who redefine the potential of technology in achieving business success on both regional and international stages.</Text>
                                <Group>
                                    <Button color={'#0D60FF'} px={'xl'} radius={'xl'}>Learn More</Button>
                                    <Button variant='outline' px={'xl'} color='white' radius={'xl'}>{"Let's Talk"}</Button>
                                </Group>
                            </Stack>
                        </Center>

                    </Box>
                    <Box style={{ flex: 0.5 }} pos={'relative'} h={'100%'}>
                        <Image src='/pagebanner1.png' pos={'absolute'} bottom={'-50px'} h={'550px'} alt='logo' />
                    </Box>
                </Flex>
            </Paper>
        </BackgroundImage>
    )
}

export default PageBanner
