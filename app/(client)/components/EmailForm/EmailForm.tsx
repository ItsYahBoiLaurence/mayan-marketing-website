'use client'
import { Box, Button, Center, Checkbox, Stack, Text, TextInput } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'
import { useForm, Controller } from 'react-hook-form'
import { useMediaQuery } from '@mantine/hooks';
import PhoneInput from 'react-phone-input-2';

type FormEmail = {
    first_name: string
    last_name: string
    email: string
    company: string
    job_title: string
    documentTitle: string
    phone: string
}

type ResponseError = {
    error: string
    code: string
}

export default function EmailForm({ documentTitle }: { documentTitle: string }) {

    const isMobile = useMediaQuery('(max-width: 62em)');

    const { control, register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isSubmitting }, setError } = useForm<FormEmail>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            job_title: "",
            phone: "",
            documentTitle: documentTitle
        }
    })

    const onsubmit = async (formData: FormEmail) => {
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (res.status !== 200) {
                const errorData = await res.json()
                throw errorData
            }
            const data = await res.json()
            reset()
            return data
        } catch (e: any) {
            if (e.code == 'invalid-email') {
                setError('email', { type: 'manual', message: 'Please use a corporate email' })
            }
        }
    }

    return (
        <Center w={"100%"} mx={'auto'}>
            <form style={isMobile ? { width: '100%' } : { width: '60%' }} onSubmit={handleSubmit(onsubmit)}>
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
                            size="md"
                            error={errors.email?.message}
                        />

                        <Box>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: 'Phone number is required',
                                }}
                                render={({ field }) => (
                                    <>
                                        <Text tt={'uppercase'}>phone number</Text>
                                        <PhoneInput
                                            {...field}
                                            country={'ph'}
                                            inputStyle={{ width: '100%', height: '40px', borderRadius: '8px' }}
                                        />
                                    </>
                                )}
                            />
                            {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                        </Box>

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
                        <Text size='xs' fs={'italic'} ta={'center'}>Disclaimer: By providing your contact information, you agree to receive communications from our marketing and sales representatives. You may opt out at any time.</Text>
                    </Stack>
                    <Button disabled={isSubmitting} loading={isSubmitting} type='submit' my={'lg'} style={{ backgroundColor: 'rgba(0, 31, 101, 1)' }} size="lg" leftSection={<IconSend stroke={2} />} >
                        <Text tt={'uppercase'}>get the report via email</Text>
                    </Button>
                </Stack>
            </form>
        </Center>
    )
}