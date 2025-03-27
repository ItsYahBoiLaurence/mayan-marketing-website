import { client } from "@/sanity/lib/client";
import { Box, Grid, SimpleGrid, Text, Title } from "@mantine/core";
import { Stack } from "@mantine/core";
import { BackgroundImage } from "@mantine/core";
import { Center } from "@mantine/core";
import React from "react";
import BlogCard from "../../components/Cards/BlogCard/BlogCard";

export const revalidate = 60

const page = async () => {
  const query = `*[_type == "blogs"]{
    _id,
    title,
    image,
    date
    }`;
  const blogs = await client.fetch(query);
  console.log(blogs);

  return (
    <div>
      <>
        <BackgroundImage
          src="/bannerOverlap.png"
          w={"100%"}
          h={"80vh"}
          mb={"60px"}
          visibleFrom="md"
        >
          <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
            <Stack w={"40%"}>
              <Text c={"#fff"} size="sm" tt={"uppercase"} ta={"center"}>
                Blogs
              </Text>
              <Text size="72px" fw={700} c={"#fff"} ta={"center"}>
                Read <span style={{ color: '#FFCE13' }}>Insights</span> to drive <span style={{ color: '#FFCE13' }}> <br />Real Growth</span>
              </Text>
              <Box w={"60%"} mx={"auto"}>
                <Text size="md" c={"#fff"} ta={"center"}>
                  Explore expert perspectives, data-driven insights, and innovate strategies designed to scale your business, streamline operations, and maximize tech spend.
                </Text>
              </Box>
            </Stack>
          </Center>
        </BackgroundImage>

        <SimpleGrid cols={3} w={"80%"} mx={"auto"} visibleFrom="md" mt={"-120px"}>
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              title={blog.title}
              img={blog.image}
              date={blog.date}
            />
          ))}
        </SimpleGrid>


        <BackgroundImage
          src="/bannerOverlap.png"
          w={"100%"}
          h={"50vh"}
          mb={"60px"}
          hiddenFrom="md"
        >
          <Center h={"100%"} w={"100%"} bg={"#042161"} opacity={0.95}>
            <Stack align={"center"} w={"90%"}>
              <Text c={"#fff"} size="xs" tt={"uppercase"} ta={"center"}>
                Blogs
              </Text>
              <Title order={1} fw={700} c={"#fff"} ta={"center"} >
                Read <span style={{ color: '#FFCE13' }}>Insights</span> to drive <span style={{ color: '#FFCE13' }}> <br />Real Growth</span>
              </Title>
              <Box w={"80%"} mx={"auto"}>
                <Text size="xs" c={"#fff"} ta={"center"} >
                  Explore expert perspectives, data-driven insights, and innovate strategies designed to scale your business, streamline operations, and maximize tech spend.
                </Text>
              </Box>
            </Stack>
          </Center>
        </BackgroundImage>
      </>

      <SimpleGrid cols={1} w={"80%"} mx={"auto"} mt={"-120px"} hiddenFrom="md">
        {blogs.map((blog: any) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            img={blog.image}
            date={blog.date}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default page;
