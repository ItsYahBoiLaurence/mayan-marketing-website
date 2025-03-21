import PageBanner from '@/app/(client)/components/Banners/PageBanner'
import RightBanner from '@/app/(client)/components/Banners/RightBanner'
import CompanyCard from '@/app/(client)/components/Cards/CompanyCard'
import CompanyTimeLine from '@/app/(client)/components/Timeline/CompanyTimeLine'
import FeatureCard from '@/app/(client)/components/Cards/FeatureCard'
import { Box, Center, Divider, Flex, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import SectionBanner from '@/app/(client)/components/Banners/SectionBanner'
import BannerWithOverlap from '@/app/(client)/components/Banners/BannerWithOverlap'
import MayanValuesCard from '@/app/(client)/components/Cards/MayanValuesCard'

const images = [
    {
        image: "/ayalaLand.png",
        title: "Ayala Land",
    },
    {
        image: "/sixFigure.png",
        title: "Six Figure",
    },
    {
        image: "/spurway.png",
        title: "Spurway",
    },
    {
        image: "/unionBank.png",
        title: "Union Bank",
    },
    {
        image: "/ayalaMalls.png",
        title: "Ayala Malls",
    },
    {
        image: "/positiveWorkplaces.png",
        title: "Positive Workplaces",
    },
]

const page = () => {
    return (
        <div>
            <PageBanner />
            <Flex w={'80%'} mx={'auto'} justify={'start'} direction={'column'} gap={'xl'} my={'xl'}>
                <Box w={'50%'}>
                    <Title fw={700} >
                        Driving Digital transformation through strategic tech alignment
                    </Title>
                </Box>
                <Flex gap={'xl'}>
                    <Box style={{ flex: 0.7 }}>
                        <FeatureCard />
                    </Box>
                    <Box style={{ flex: 0.3 }}>
                        <Title>This is the benchmark of our success.</Title>
                        <Divider my="md" />
                        <Text>Our powerhouse of tech expertise and strategic business insights empowers our clients to achieve their most critical objectives.</Text>
                    </Box>
                </Flex>

            </Flex>
            <CompanyCard />
            <Flex>
                <Center bg={'#111013'} w={'100%'} style={{ flex: 0.60 }}>
                    <SimpleGrid cols={3} verticalSpacing={'50'} w={'100%'}>
                        {images.map(({ image, title }) => (
                            <Center key={title}>
                                <Image src={image} w={150} fit="contain" h={100} alt='logo' />
                            </Center>
                        ))}
                    </SimpleGrid>
                </Center>
                <Box w={'100%'} style={{ flex: 0.40 }}>
                    <RightBanner
                        opacity={1}
                        bg="#1E1E1E"
                        textColor={'white'}
                        title={"Our Trusted Partners"}
                        subDescription={"Powering innovation and efficiency with industry-leading tools and platforms. We collaborate with top technology providers to deliver seamless integration, smarter workflows, and scalable solutions tailored to your business needs."}
                    />
                </Box>
            </Flex>
            <Flex w={'80%'} mx={'auto'} justify={'start'} direction={'row'} gap={'xl'} my={'xl'} py={'xl'}>
                <Stack flex={0.4}>
                    <Text size='sm'>[ Our Purpose ]</Text>
                    <Title fw={700}>When, How and Why we Started.</Title>
                    {/* <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Text> */}
                </Stack>
                <Box w={'100%'} style={{ flex: 0.6 }}><CompanyTimeLine /></Box>
            </Flex>
            <BannerWithOverlap
                leftSideImage="/bannerOverlap.png"
                rightSideImage="/bgBanner.png"
                title="Our Leaders. Experts, Not Executives."
                description="Mayan Solutions is led by seasoned strategists and technologists who work hands-on with clients to deliver tangible, results-driven solutions."
                rightColor='#FBCA12'
                listData={[
                    {
                        name: "Kim Montano",
                        position: "Chief Executive Officer",
                        ceo_description: "Founded in 2022 seasoned tech entrepreneur Kim Montano, Mayan Solutions confronts a key tech challenge; aligning technology with business goals. With a rich history in leading tech ventures and product management, Kim established Mayan Solutions to offer a unique blend of technical savvy and strategic insight. ",
                        company_line: 'We seamlessly fuse the expertise of top-notch software engineers with the strategic acumen of business consultants, confidently steering complex corporate decisions. '
                    },
                ]}
            />
            <Flex w={'80%'} mx={'auto'} justify={'start'} direction={'row'} gap={'xl'} my={'xxl'} py={'xl'} >
                <Stack flex={0.4}>
                    <Title fw={700}>Our Values: Driving Excellence Every Day</Title>
                    <Text size='sm'>We are committed to delivering strategic, results-driven technology solutions that empower businesses to grow, scale, and innovate. Our values drive us to prioritize impact over output, collaboration over transactions, and long-term success over short-term fixes.</Text>
                </Stack>
                <MayanValuesCard />
            </Flex>

            <SectionBanner
                image="./bannerImage.png"
                title={"Share your stories. Let's Get In Touch"}
                subDescription={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
                buttonDesc={"Book a discovery call"}
                textColor={'white'}
            />
        </div>
    )
}

export default page
