import { BackgroundImage, Box, Button, ColorSwatch, Image, Paper, Stack, Text, Title } from '@mantine/core'
import CustomButton from '../Button/CustomButton'

type CardStylingProp = {
    cardStyle: number
    image?: string
    title: string
    description: string
    buttonDesc: string
}

const CaseStudyCard = async ({ cardStyle, title, description, buttonDesc, image }: CardStylingProp) => {

    return (
        <>
            {cardStyle % 3 === 0 ? (
                <BackgroundImage src={'/bgBanner3.png'} style={{ zIndex: 1 }} flex={0.33} h={450} radius={'md'}>
                    <Paper bg={'#0D60FF'} w={'100%'} h={'100%'} style={{ zIndex: 1 }} opacity={0.90} radius={'md'}>
                        <Stack p={'xl'} gap={'xl'} align={'start'}>
                            <Title fw={700} c={'white'}>{title}</Title>
                            <Text c={'white'}>{description}</Text>
                            <CustomButton color={'#FFCE13'} autoContrast radius={'xl'} to="/case-studies">{buttonDesc}</CustomButton>
                        </Stack>
                    </Paper>
                </BackgroundImage>
            ) : cardStyle % 3 === 1 ? (

                <Paper bg={'#EFEFEF'} w={'100%'} style={{ zIndex: 1, overflow: 'hidden' }} flex={0.33} h={500} radius={'md'}>
                    <Image src={image} alt={title} mt={'-80px'} />
                    <Stack mt={'-50px'} px={'xl'} align={'start'}>
                        <Title fw={700}>
                            {title}
                        </Title>
                        <Text>
                            {description}
                        </Text>
                        <CustomButton color={'#1e1e1e'} autoContrast radius={'xl'} to="/case-studies">{buttonDesc}</CustomButton>
                    </Stack>
                </Paper >
            ) : (
                <BackgroundImage src={'/bgBannerPerson.png'} style={{ zIndex: 1 }} flex={0.33} h={450} radius={'md'}>
                    <Paper w={'100%'} h={'100%'} style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(255, 206, 19, 1), rgba(255, 206, 19, 0.80))' }} radius={'md'}>
                        <Stack p={'xl'} gap={'xl'} align={'start'} h={'100%'} justify={'center'}>
                            <ColorSwatch color='#FFFFFF' withShadow={false} size={50} radius={'lg'} />
                            <Title fw={700} >{title}</Title>
                            <Text >{description}</Text>
                            <CustomButton color={'#1e1e1e'} autoContrast radius={'xl'} to="/case-studies">{buttonDesc}</CustomButton>
                        </Stack>
                    </Paper>
                </BackgroundImage >
            )
            }
        </>
    )
}

export default CaseStudyCard
