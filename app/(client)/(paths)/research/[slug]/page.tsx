import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BackgroundImage, Box, Button, Center, Container, Flex, Group, Image, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { PortableText } from "next-sanity";
import DownloadButton from '../../../components/Button/DownloadButton'
import { IconDownload, IconFile, IconSend } from '@tabler/icons-react';
import { IconSquareRoundedCheck } from '@tabler/icons-react';
import EmailForm from "@/app/(client)/components/EmailForm/EmailForm";
import ContentForm from "@/app/(client)/components/ContentForm/ContentForm";
import VideoPlayer from "@/app/(client)/components/VideoPlayer/VideoPlayer";
import ContentBody from "@/app/(client)/components/ContentBody/ContentBody";

const getSingleResearch = async (slug: string) => {
    const query = `*[_type == "gatedContent" && slug.current == "${slug}"][0]{
  _id,
  title,
  slug,
  image,
  body,
  gatedPdfContent,
  highlights,
  file{
    asset->{
      _id,
      url,
      originalFilename,
      size
    }
  },
  "videoUrl": videoFile.asset->url
}`
    return await client.fetch(query)
}


export default async function page({ params }: any) {

    const { slug } = await params

    const singleResearch = await getSingleResearch(slug)

    const { title, image, body, gatedPdfContent } = singleResearch

    return (

        <Box>
            <BackgroundImage src={urlFor(image).url()} h={"80vh"} visibleFrom="md">
                <Paper
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                    w={"100%"}
                    h={"100%"}
                >
                    <Stack h={'100%'} align="start" justify="end" w={'70%'} mx={'auto'} py={'lg'}>
                        <Box mb={'lg'}>
                            <Title c={'white'} fw={700} size="54px">{title}</Title>
                        </Box >
                    </Stack>
                </Paper>
            </BackgroundImage>

            <BackgroundImage src={urlFor(image).url()} h={"50vh"} hiddenFrom="md">
                <Paper
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                    w={"100%"}
                    h={"100%"}
                >
                    <Stack h={'100%'} align="start" justify="end" w={'90%'} mx={'auto'} py={'lg'}>
                        <Group mb={'lg'}>
                            <Title c={'white'} fw={700} order={2}>{title}</Title>
                        </Group >
                    </Stack>
                </Paper>
            </BackgroundImage>

            <ContentBody body={body} />

            {gatedPdfContent === true
                ? (
                    <ContentForm title={title} image={image} highlights={singleResearch.highlights} />

                )
                : (
                    <VideoPlayer image={image} videoUrl={singleResearch.videoUrl} title={title} />
                )
            }
        </Box >
    )
}