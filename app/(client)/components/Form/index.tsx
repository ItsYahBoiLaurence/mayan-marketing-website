"use client"
import { BackgroundImage, Button, Checkbox, Paper, Stack, Text, Textarea, TextInput, Title } from '@mantine/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const index = () => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post("https://script.google.com/macros/s/AKfycbxY_2sG8qCcgWZeCpwElHJCOXlY9IgJ_97Pq-OIwctG9fY7cLXfFaR4jM3_y2V2pvJI/exec", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(`Response: ${response}`)
            reset()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <BackgroundImage src='/formBg.jpeg' pos={'absolute'} bottom={'-50px'} h={'550px'} radius={'lg'}>
            <Paper p={'xl'} radius={'lg'} w={'100%'} h={'100%'} bg={'#EFEFEF'} opacity={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack w={'90%'} h={'80%'}>
                    <Title order={3} fw={500}>{"Let's talk about your business!"}</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <Stack>
                                <TextInput {...register('name')} placeholder='Enter your full name' label={<Text>What is your name?</Text>} />
                                <TextInput {...register('email')} placeholder='Enter your email' label={<Text>Email</Text>} />
                                <Textarea {...register('message')} placeholder='Please tell us what you are trying to achieve' label={<Text>Message</Text>} />
                            </Stack>
                            <Checkbox label={<Text size='xs'>By clicking the checkbox you agree to the Privacy Policy and terms of service </Text>} />
                            <Button variant='filled' color='#FBCA12' autoContrast type='submit'>Submit</Button>
                        </Stack>
                    </form>
                </Stack>
            </Paper>
        </BackgroundImage>

    )
}

export default index
