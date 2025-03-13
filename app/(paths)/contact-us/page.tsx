import { Text, BackgroundImage, Box, Center, Flex, Paper, Stack, Title } from '@mantine/core'
import React from 'react'
import Form from '@/app/components/Form'
const page = () => {
    return (
        <div>
            <BackgroundImage src='/contactBanner.png' w={'100%'} h={'80vh'} mb={'60px'}>
                <Paper h={"100%"} w={"100%"} bg={'#042161'} opacity={0.95}>
                    <Flex w={"100%"} h={'100%'} justify={'center'} align={'center'}>
                        <Box style={{ flex: 0.5 }} h={'100%'}>
                            <Center h={'100%'} px={'xl'}>
                                <Stack w={'80%'}>
                                    <Box>
                                        <Title c={'#fff'} fw={700}>Share your Stories.</Title>
                                        <Title c={'#fff'} fw={700}>{"Let's get in touch."}</Title>
                                    </Box>
                                    <Text size='md' c={'#fff'}>Learn how to boost your business by harnessing the power of technology and discover innovative tools to drive success.</Text>
                                </Stack>
                            </Center>
                        </Box>
                        <Box style={{ flex: 0.35 }} pos={'relative'} h={'100%'}>
                            <Form />
                        </Box>
                    </Flex>
                </Paper>
            </BackgroundImage>
        </div>
    )
}

export default page
