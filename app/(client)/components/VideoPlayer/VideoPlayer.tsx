"use client"
import { urlFor } from "@/sanity/lib/image"
import { BackgroundImage, Box, Button, Center, Modal, Stack, Text, TextInput, Title } from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { IconPlayerPlay } from "@tabler/icons-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { notifications } from '@mantine/notifications';

interface VideoDetails {
    image: string
    videoUrl: string
    title: string
}

interface FormData {
    first_name: string
    last_name: string
    email: string
    company: string
    job_title: string
    documentTitle: string
}

export default function VideoPlayer({ image, videoUrl, title }: VideoDetails) {

    const isMobile = useMediaQuery('(max-width: 62em)')
    const [canPlay, setCanplay] = useState(false)
    const [opened, { close, open }] = useDisclosure(false)

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, setError } = useForm<FormData>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            job_title: "",
            documentTitle: title
        }
    })

    const onsubmit = async (formData: FormData) => {
        try {
            const res = await fetch('/api/video-detail', {
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
            notifications.show({
                title: 'Submit Success',
                message: 'Thank you for your cooperation!',
            })
            setCanplay(true)
            return data
        } catch (e: any) {
            if (e.code == 'invalid-email') {
                setError('email', { type: 'manual', message: 'Please use a corporate email' })
            }
        }
    }

    if (canPlay) {
        return (
            <Box w={isMobile ? "90%" : "70%"} mx={'auto'}>
                <video controls width={"100%"}>
                    <source src={"https://cdn.sanity.io/files/99px5jz6/production/2dfd18fba00a6b26033a77515430a9d441f5c283.mp4"} type="video/mp4" />
                </video>
            </Box>
        )
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title={<Text size="lg" fw={700}>Fill out the form to watch the video.</Text>} centered>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <Stack>
                        <TextInput
                            {...register('first_name', { required: "First Name is required" })}
                            size={'md'} label={<Text pb={'xs'}>First Name</Text>}
                            placeholder="Enter your first name..."
                        />
                        <TextInput
                            {...register('last_name', { required: "Last Name is required" })}
                            size={'md'} label={<Text pb={'xs'}>Last Name</Text>}
                            placeholder="Enter your last name..."
                        />
                        <TextInput
                            {...register('email', { required: "Email is required" })}
                            size={'md'} label={<Text pb={'xs'}>Email</Text>}
                            placeholder="Enter your email..."
                            error={errors.email?.message}
                        />
                        <TextInput
                            {...register('company', { required: "Company is required" })}
                            size={'md'} label={<Text pb={'xs'}>Company</Text>}
                            placeholder="Enter your company..."
                        />
                        <TextInput
                            {...register('job_title', { required: "Job Title is required" })}
                            size={'md'} label={<Text pb={'xs'}>Job Title</Text>}
                            placeholder="Enter your job title..."
                        />
                        <Button color={"rgba(0, 31, 101, 1)"} size="md" type="submit" loading={isSubmitting}>Submit</Button>
                    </Stack>
                </form>
            </Modal>

            <Box w={isMobile ? "90%" : "70%"} mx={'auto'}>
                <BackgroundImage src={urlFor(image).url()} onClick={() => open()} style={{ cursor: "pointer" }} >
                    <Center h={isMobile ? '215px' : "650px"} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <IconPlayerPlay color="white" size={'54px'} />
                    </Center>
                </BackgroundImage>
            </Box>
        </>
    )
}