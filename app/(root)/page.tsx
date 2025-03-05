import { Box, Paper } from "@mantine/core";
import HomepageBanner from "../components/Banners/HomepageBanner";
import CompanyCard from "../components/Cards/CompanyCard";
import SectionBanner from "../components/Banners/SectionBanner";
export default function Home() {
  return (
    <Box w={'100%'}>
      <HomepageBanner />
      <SectionBanner
        image="./bannerImage.png"
        title={"Share your stories. Let's Get In Touch"}
        subDescription={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}
        buttonDesc={"Book a discovery call"}
      />
      <CompanyCard />
    </Box>
  );
}