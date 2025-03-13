import { Box, Center, Flex, Image, SimpleGrid } from "@mantine/core";
import HomepageBanner from "../components/Banners/HomepageBanner";
import CompanyCard from "../components/Cards/CompanyCard";
import SectionBanner from "../components/Banners/SectionBanner";
import CardSection from "../components/Sections/CardSection";
import ServiceSection from "../components/Sections/ServiceSection";
import RightBanner from "../components/Banners/RightBanner";
import FAQSection from "../components/Sections/FAQSection";


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

  return (
    <Box w={'100%'}>
      <HomepageBanner />
      <CardSection />
      <ServiceSection />
      <SectionBanner
        image="./bannerImage.png"
        title={"Share your stories. Let's Get In Touch"}
        subDescription={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
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
            subDescription={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
          />
        </Box>
      </Flex>

      {/* FAQ Section */}
      <FAQSection />
    </Box>
  );
}