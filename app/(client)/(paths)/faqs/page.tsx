import { BackgroundImage, Box, Center, Container, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import Accordion from '../../components/Accordion'

const faqs = [
    {
        title: 'Are you an application development company?',
        content: "Yes, but we're more than that! At Mayan, we combine tech expertise with strategic tech advisory to ensure your apps align with your business goals. We also provide comprehensive IT support and internal training-from app development to ongoing maintenance-ensuring every step takes you to succss. On top of that, we offer tech solutions that involve hardware and integration of IOT(Internet of things).",
        category: 'Development'
    },
    {
        title: "I'm looking for a mobile app development company, why should I choose Mayan?",
        content: "Choosing Mayan means you're opting for more than just a mobile app delopment company. We bring unmatched expertise in ceating high-quality mobile apps, web apps, and custom apps that customers will be delighted to use. Beyond mobile app development, you have a growth partner who is committed to your long-term success. Top app development app companies in the Philippines do not even consider the business results and do not have ROI for their clients in mind. But Mayan takes all these into consideration from day 1 to post-launch.",
        category: 'Mobile App'
    },
    {
        title: 'Do you have a team of mobile app developers to work on my app?',
        content: "Yes, we have a team of mobile app developers equipped to build your app, whether from scratch improvement, or ongoing maintenance and support.",
        category: 'Mobile App'
    },
    {
        title: 'What kind of app development project do you currently work on?',
        content: "At Mayan, we work on a variety of app development projects using an enterprise architecture with a holistic approach and integration. We offer mobile app development services, including complex and industry-specific solutions that are versatile and user-friendly. Our expertise in cross-platform also build web apps and enterprise solutions like CRM, ERP, Management Systems, workflow autmation, and data analysis.",
        category: 'Development'
    },
    {
        title: 'Do you also develop mobile apps?',
        content: "Absolutely, our design and development team have built mobile apps for end users and enterprise users. You can check our portforlio page for more details.",
        category: 'Mobile App'
    },
    {
        title: 'How does the app development process work?',
        content: "The app development process involves three distinct stages based on our 3DX framework. This stage involves strategic planning and in-depth data-driven research to align your app's objectives with market opportunities. The team then crafts a tailored design and begins developing, ensuring each component is built to optimize functionality and user experience. This phase is marked by iterative testing and refinement, guaranteeing a high-quality result. Finally, the app is launched, and you receive ongoing support and training to ensure it scales effectively as your user base grows. ",
        category: 'Development'
    },
    {
        title: 'There are plenty of mobile app development companies, so why should I work with Mayan?',
        content: "Every solution we created is guaranteed to bring significant returns for your business. The app, website, or tech systems we built or deployed will return 300% to 500% on your investments at a minimum. A regular mobile application development company does not employ strategic business consulting frameworks; thus, the apps they build usually do not provide any industry edge over yourcompetitors. They didn't have the expertise or resources to ensure that the tech solution addresses your business needs.",
        category: 'Development'
    },
    {
        title: 'Can you develop complex apps?',
        content: "Yes, Mayan specializes in developing complex apps that meet your business needs and provide greate functionality. Our team of app developers are knowledgeable in a variety of tech stack and mobile app development tools to help us design and built apps according to your specifications. If you have more questions or need further assistance, you can book a call with us today to specific requirements for custom solutions",
        category: 'Development'
    },
    {
        title: 'How does Mayan help business choose the right app developers for their projects?',
        content: "Mayan plays a crucial role in guiding businesses to select the right team of app developers by napping out your entire busines landscape and aligning your technology needs with your goals. Get a chance to work with talented people who previously handled high level projects from top app development companies in the Philippines. Our strategie insights and precise analysis help you evaluate potential developers based on their technical expertise, and undestanding of your project requirements. By leveraging our comprehensive assessments and comparison, you can make informed decisions that ensure a perfect match for your app development needs.",
        category: 'Development'
    },
]


const page = () => {
    return (
        <>
            <BackgroundImage
                src="/faqs.jpeg"
                w={"100%"}
                h={"60vh"}
                mb={"60px"}
                visibleFrom="md"
                pos='relative'
                z-index={1}
            >
                <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.90}>
                    <Stack w={"40%"}>
                        <Text c={"#fff"} size="sm" tt={"uppercase"} ta={"center"}>
                            Let us Guide You
                        </Text>
                        <Text size="72px" fw={700} c={"#fff"} ta={"center"}>
                            <span style={{ color: '#FFCE13' }}>Frequently</span> Asked <br />Question
                        </Text>
                        <Box w={"60%"} mx={"auto"}>
                            <Text size="md" c={"#fff"} ta={"center"}>
                                Explore expert perspectives, data-driven insights, and innovate strategies designed to scale your business, streamline operations, and maximize tech spend.
                            </Text>
                        </Box>
                    </Stack>
                </Center>
            </BackgroundImage>


            <Container mt={'-120px'} pos='relative'
                z-index={1}>
                <Stack gap={'md'}>
                    {faqs.map((item, index) => (
                        <Accordion {...item} key={index} />
                    ))}
                </Stack>
            </Container>


        </>
    )
}
export default page
