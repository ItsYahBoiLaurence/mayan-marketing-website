import { Box, Center, Flex, Image, SimpleGrid } from "@mantine/core";
import HomepageBanner from "../components/Banners/HomepageBanner";
import CompanyCard from "../components/Cards/CompanyCard";
import SectionBanner from "../components/Banners/SectionBanner";
import ServiceSection from "../components/Sections/ServiceSection";
import RightBanner from "../components/Banners/RightBanner";
import FAQSection from "../components/Sections/FAQSection";
import CaseStudyCard from "../components/Cards/CaseStudyCard";


export default function Home() {

  const images = [
    {
      image: "/servicenow.png",
      title: "servicenow",
    },

    {
      image: "/google.png",
      title: "google",
    },
    {
      image: "/hotjar.png",
      title: "hotjar",
    },
    {
      image: "/MIXPANEL.png",
      title: "MIXPANEL",
    },
    {
      image: "/powerbi.png",
      title: "powerbi",
    },
    {
      image: "/salesforce.png",
      title: "salesforce",
    },
    {
      image: "/SAP.png",
      title: "SAP",
    },
    {
      image: "/aws.png",
      title: "AWS",
    },

  ]


  const caseStudies = [
    {
      image: "/caseStudy1.png",
      title: "From Insights to Impact.",
      description: "Our clients achieve real business results with Mayan Solutions’ expertise in strategy, technology services, and operations. From aligning tech initiatives with business goals to optimizing processes and integrating scalable solutions, we help businesses drive measurable growth.",
      buttonDesc: "Our Case Studies"
    },
    {
      title: "Digital enablement, user engagement",
      description: "Empowering businesses with the right technology and strategy to enhance user experiences, streamline operations, and drive measurable results.",
      buttonDesc: "Our Case Studies",
      image: '/laptop.png'
    },
    {
      image: "/caseStudy1.png",
      title: "Enterprise AI for Customer growth.",
      description: "Unlock AI-driven insights to accelerate customer acquisition and retention. Mayan Solutions empowers businesses with intelligent automation and predictive analytics.",
      buttonDesc: "Learn More"
    },

  ]

  return (
    <Box w={'100%'}>
      <HomepageBanner />
      <Flex w={'80%'} mx={'auto'} direction={'row'} gap={'20'} mt={'-200px'} align={'center'} justify={'center'}>
        {caseStudies.map(({ image, title, description, buttonDesc }, index) => (
          <CaseStudyCard key={title} cardStyle={index} image={image} title={title} description={description} buttonDesc={buttonDesc} />
        ))}
      </Flex>
      <ServiceSection />
      <SectionBanner
        image="./bannerImage.png"
        title={"Share your stories. Let's Get In Touch"}
        subDescription={"Every business has a unique journey. Let’s discuss your challenges, opportunities, to determine the right tech strategy that will drive your success."}
        buttonDesc={"Book a discovery call"}
        textColor={'white'}
      />
      <CompanyCard />

      {/* Tech Stack Section */}
      <Flex>
        <Center bg={'black'} w={'100%'} style={{ flex: 0.60 }}>
          <SimpleGrid cols={4} verticalSpacing={'50'} w={'100%'}>
            {images.map(({ image, title }) => (
              <Center key={title}>
                <Image src={image} w={150} fit="contain" h={100} alt='logo' />
              </Center>
            ))}
          </SimpleGrid>
        </Center>
        <Box w={'100%'} style={{ flex: 0.40 }}>
          <RightBanner
            bg="#FBCA12"
            textColor={'black'}
            title={"Our tech stack and growth partners"}
            subDescription={"Powering innovation and efficiency with industry-leading tools and platforms. We collaborate with top technology providers to deliver seamless integration, smarter workflows, and scalable solutions tailored to your business needs."}
          />
        </Box>
      </Flex>

      {/* FAQ Section */}
      <FAQSection />
    </Box>
  );
}