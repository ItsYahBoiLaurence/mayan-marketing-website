import { BackgroundImage, Box, Button, Center, Flex, Group, Paper, Stack, Title, Text, Image, SimpleGrid, Container } from '@mantine/core'
import React from 'react'
import PageBanner from '../../components/Banners/PageBanner'
import ServiceCard from '../../components/Cards/ServiceCard'
import SectionBanner from '../../components/Banners/SectionBanner'
import BannerWithOverlap from '../../components/Banners/BannerWithOverlap'
import TechCard from '../../components/Cards/TechCard'
import CarouselBanner from '../../components/Banners/CarouselBanner'

const services = [
    {
        id: 1,
        title: 'Customer apps',
        description: 'Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.',
    },
    {
        id: 2,
        title: 'Customer apps',
        description: 'Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.',
    },
    {
        id: 3,
        title: 'Customer apps',
        description: 'Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.',
    },
    {
        id: 4,
        title: 'Customer apps',
        description: 'Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.',
    },
    {
        id: 5,
        title: 'Customer apps',
        description: 'Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.',
    },
    {
        id: 6,
        title: 'Customer apps',
        description: 'Enhance your customer experience with a faster, more intuitive interface. The result? More engaged customers and increased retention.',
    },

]


const techStack = [
    {
        id: 1,
        title: 'Jira',
        description: 'Widely used for managing projects and automating workflows in tech consulting.',
        image: '/jira.png'
    },
    {
        id: 2,
        title: 'Github',
        description: 'Central to software development and DevOps workflows.',
        image: '/github.png'
    },
    {
        id: 3,
        title: 'Terraform',
        description: 'Automates infrastructure provisioning in cloud environments.',
        image: '/terraform.png'
    },
]



const page = () => {
    return (
        <Box>
            <BackgroundImage src='/' w={'100%'} h={'80vh'} mb={'60px'}>
                <Paper h={"100%"} w={"100%"} bg={'#042161'} opacity={0.95}>
                    <Flex w={"100%"} h={'100%'} justify={'center'} align={'center'}>
                        <Box style={{ flex: 0.5 }} h={'100%'}>
                            <Center h={'100%'} px={'xl'}>
                                <Stack w={'80%'}>
                                    <Title c={'#fff'} fw={700}>Grow your Digital Product with your own Mobile App</Title>
                                    <Text size='md' c={'#fff'}>At the heart of our mobile app development process is a commitment to align the mobile app with your company’s goals. We define a clear objective, ensuring that every app we build directly supports your vision. </Text>
                                    <Group>
                                        <Button color={'#0D60FF'} px={'xl'} radius={'xl'}>Learn More</Button>
                                        <Button variant='outline' px={'xl'} color='white' radius={'xl'}>{"Let's Talk"}</Button>
                                    </Group>
                                </Stack>
                            </Center>

                        </Box>
                        <Box style={{ flex: 0.5 }} pos={'relative'} h={'100%'}>
                            <Image src='/serviceCp.png' pos={'absolute'} bottom={'-50px'} h={'550px'} alt='logo' />
                        </Box>
                    </Flex>
                </Paper>
            </BackgroundImage>

            <Box w={'80%'} mx={'auto'}>
                <SimpleGrid cols={3} verticalSpacing={'xl'} spacing={'xl'}>
                    {services.map(({ id, title, description }) => (
                        <ServiceCard key={id} title={title} description={description} />
                    ))}
                </SimpleGrid>
            </Box>

            <CarouselBanner />

            <BannerWithOverlap
                leftSideImage="/bannerOverlap.png"
                rightSideImage="/bgBanner.png"
                title="Empower your team with analytics and make data-driven decisions. "
                description="Transform your online platform into a powerful tool for engaging customers, driving leads and sales, and nurturing them throughout their journey with our proven 3DX process."
                rightColor='#FBCA12'
                buttonText={"Book a discovery call"}
            />

            <Flex w={'80%'} mx={'auto'} my={'32px'} h={'40vh'} gap={'xl'} py={'xl'}>
                <Stack flex={0.3} h={'100%'}>
                    <Box>
                        <Text fw={700} size={'lg'}>Automations:</Text>
                        <Title fw={700}>Modernize your business processes, dominate your industry. </Title>
                    </Box>
                    <Text>Minimize manual work and reduce human errors with automation tools and solution built for enterprises. Mayan can integrate bespoke automation solutions with your current ERP systems, providing an easy-to-use that supports quick adoption. </Text>
                </Stack>
                <SimpleGrid cols={3} verticalSpacing={'xl'} spacing={'xl'} style={{ flex: 0.7 }}>
                    {techStack.map(({ id, title, description, image }) => (
                        <TechCard key={id} title={title} description={description} image={image} />
                    ))}
                </SimpleGrid>
            </Flex>

            <SectionBanner
                image="./bannerImage.png"
                title={"Share your stories. Let's Get In Touch"}
                subDescription={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
                buttonDesc={"Book a discovery call"}
                textColor={'white'}
            />
        </Box>
    )
}

export default page
