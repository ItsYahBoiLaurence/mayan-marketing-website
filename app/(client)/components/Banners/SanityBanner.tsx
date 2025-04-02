import { fetchFromSanity } from "@/lib/sanityApi"
import { AspectRatio, BackgroundImage, Box, Center, Group, Image, Stack, Text, Title } from "@mantine/core"
import CustomText from '../CustomText/index'
import CustomButton from "../Button/CustomButton"
import { urlFor } from "@/sanity/lib/image"

interface ButtonType {
    btn_link: string
    btn_label: string
}


const SanityBanner = async () => {

    const bannerDetails = await fetchFromSanity(`*[_type=="page_banner" && name=="Homepage"]{
        banner{
            title,
            subtitle,
            description,
            image,
            style,
            buttons
        }
    }[0]`)
    const { title, subtitle, description, image, style, buttons } = bannerDetails.banner

    const Texts = (
        <Stack ta={style == 1 ? 'center' : 'start'} w={"60%"} c={'white'} align={style == 1 ? 'center' : 'start'} gap={'xs'}>
            <Box>
                <Text size="lg">{subtitle}</Text>
                <CustomText text={title} size="64px" fw={700} />
            </Box>
            <Text w={'80%'} >{description}</Text>
        </Stack>
    )

    const Buttons = (
        <Group>
            {buttons && buttons.map(({ btn_label, btn_link }: ButtonType, index: number) => (
                <CustomButton
                    to={btn_link}
                    key={index}
                    radius={'xl'}
                    variant={index % 2 == 0 ? 'filled' : 'light'}
                    color={index % 2 == 0 ? '#0D60FF' : '#e8e8e8'}
                    c={'white'}
                >
                    {btn_label}
                </CustomButton>
            ))}
        </Group>
    )



    return (
        <>
            {style == 1 ? (
                <BackgroundImage src={urlFor(image).url()}>
                    <Center w={'100vw'} h={'100vh'} bg={"#001F65"} opacity={0.90}>
                        <Stack align="center">
                            {Texts}
                            {Buttons}
                        </Stack>
                    </Center>
                </BackgroundImage>
            ) : (
                <BackgroundImage src={"/bgBanner.png"}>
                    <Center w={'100vw'} h={'100vh'} bg={"#001F65"} opacity={0.98} style={{ display: "flex" }}>


                        <Box flex={0.5} >
                            <Center ps={'64px'} h={'100%'} w={'100%'} >
                                <Stack w={'90%'}>
                                    {Texts}
                                    {Buttons}
                                </Stack>
                            </Center>
                        </Box>

                        <Box flex={0.5} pos={'relative'}>
                            <Image src={urlFor(image).url()} pos={'relative'} bottom={"-100px"} h={'100%'} w={'100%'} />
                        </Box>

                    </Center>
                </BackgroundImage>
            )
            }
        </>
    )
}

export default SanityBanner
