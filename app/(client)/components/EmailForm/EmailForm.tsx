'use client'
import { Box, Button, Center, Stack, Text, TextInput } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'
import { useForm, } from 'react-hook-form'
import { useMediaQuery } from '@mantine/hooks';

type FormEmail = {
    first_name: string
    last_name: string
    email: string
    company: string
    job_title: string,
    documentTitle: string
}

export default function EmailForm({ documentTitle }: { documentTitle: string }) {

    const isMobile = useMediaQuery('(max-width: 62em)');

    const { register, handleSubmit, reset, formState: { isSubmitSuccessful, isSubmitting } } = useForm<FormEmail>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            job_title: "",
            documentTitle: documentTitle
        }
    })

    const onsubmit = async (data: FormEmail) => {
        try {
            await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json)
                .then(data => {
                    reset()
                    console.log(data)
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Center w={"100%"} mx={'auto'}>
            <form style={isMobile? { width: '100%' }:{ width: '60%' }} onSubmit={handleSubmit(onsubmit)}>
                {isSubmitSuccessful && <Text my={'md'} c={'green'} ta={'center'}>We sent the document to your email!</Text>}
                <Stack justify="center" align="center">
                    <Stack w={'100%'} gap={'lg'}>
                        <TextInput
                            {...register('first_name', { required: "First name is required" })}
                            label={<Text tt={'uppercase'}>first name</Text>}
                            radius={'md'}
                            placeholder="Enter you first name"
                            size="md"
                        />

                        <TextInput
                            {...register('last_name', { required: "Last name is required" })}
                            label={<Text tt={'uppercase'}>last name</Text>}
                            placeholder="Enter you last name"
                            radius={'md'}
                            size="md" />
                        <TextInput
                            {...register('email', { required: "Email is required" })}
                            label={<Text tt={'uppercase'}>email address</Text>}
                            placeholder="Enter you email address"
                            radius={'md'}
                            size="md" />
                        <TextInput
                            {...register('company', { required: "Company is required" })}
                            label={<Text tt={'uppercase'}>company</Text>}
                            placeholder="Enter your company"
                            size="md"
                            radius={'md'}
                        />
                        <TextInput
                            {...register('job_title', { required: "Job Title is required" })}
                            label={<Text tt={'uppercase'}>job title</Text>}
                            placeholder="Enter your job title"
                            size="md"
                            radius={'md'}
                        />
                    </Stack>

                    <Button disabled={isSubmitting} loading={isSubmitting} type='submit' my={'lg'} style={{ backgroundColor: 'rgba(0, 31, 101, 1)' }} size="lg" leftSection={<IconSend stroke={2} />} >
                        <Text tt={'uppercase'}>get the report via email</Text>
                    </Button>
                </Stack>
            </form>
        </Center>
    )
}