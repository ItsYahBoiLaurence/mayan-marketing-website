import { Box, Paper } from "@mantine/core";
import HomepageBanner from "../components/Banners/HomepageBanner";
import CompanyCard from "../components/Cards/CompanyCard";
export default function Home() {
  return (
    <Box w={'100%'}>
      <HomepageBanner />
      <CompanyCard />
    </Box>
  );
}