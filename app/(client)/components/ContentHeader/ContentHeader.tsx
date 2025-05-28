// "use client"

// import { urlFor } from "@/sanity/lib/image"
// import { BackgroundImage, Box, Paper, Stack, Title } from "@mantine/core"
// import { useMediaQuery } from "@mantine/hooks"

// export default async function ContentHeader({ image, title }: { image: string, title: string }) {
//     const isMobile = useMediaQuery('(max-width: 62em)')
//     return (
//         <>
//             <BackgroundImage src={urlFor(image).url()} h={isMobile ? "60vh" : "80vh"}>
//                 <Paper
//                     style={{
//                         background:
//                             "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
//                     }}
//                     w={"100%"}
//                     h={"100%"}
//                 >
//                     <Stack h={'100%'} align="start" justify="end" w={isMobile?"100%": '70%'} h mx={'auto'} py={'lg'}>
//                         <Box mb={'lg'}>
//                             <Title c={'white'} fw={700} size="54px">{title}</Title>
//                         </Box >
//                     </Stack>
//                 </Paper>
//             </BackgroundImage>

//             <BackgroundImage src={urlFor(image).url()} h={"60vh"} hiddenFrom="md">
//                 <Paper
//                     style={{
//                         background:
//                             "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
//                     }}
//                     w={"100%"}
//                     h={"100%"}
//                 >
//                     <Stack h={'100%'} align="start" justify="end" w={'90%'} mx={'auto'} py={'lg'}>
//                         <Group mb={'lg'}>
//                             <Title c={'white'} fw={700} order={2}>{title}</Title>
//                         </Group >
//                     </Stack>
//                 </Paper>
//             </BackgroundImage></>
//     )
// }