import {
  Box,
  Card,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import FAQCards from "../Cards/FAQCards";
import CustomButton from "../Button/CustomButton";
import { fetchFromSanity } from "@/lib/sanityApi";

type FAQ = {
  question: string;
  answer: string;
  category: string;
};

const FAQSection = async () => {

  const faqs = await fetchFromSanity(`*[_type == "faqs"]{question, category, answer}[0...4]`)

  return (
    <>
      <Flex w={"80%"} mx={"auto"} p={"xl"} gap={"md"} visibleFrom="md">
        <Box style={{ flex: 0.3 }}>
          <Card>
            <Stack align="start">
              <Box>
                <Title order={2} fw={700}>
                  Let us Guide You.
                </Title>
                <Title order={2} fw={700}>
                  Frequently Asked Questions.
                </Title>
              </Box>
              <Text size="xs">
                Still have questions? We’re here to help! Our team is committed to
                providing you with the information and support you need to make
                the best decision. Whether you're looking for more details or
                personalized assistance, don’t hesitate to reach out—we’d love to
                hear from you!
              </Text>
              <CustomButton radius="xl" variant="filled" color="blue" to='/faqs'>
                Read More
              </CustomButton>
            </Stack>
          </Card>
        </Box>
        <SimpleGrid
          cols={2}
          verticalSpacing={"xl"}
          spacing={"xl"}
          style={{ flex: 0.7 }}
        >
          {faqs.map((faq: FAQ, index: number) => (
            <FAQCards
              key={index}
              {...faq}
            />
          ))}
        </SimpleGrid>
      </Flex>

      <Flex
        w={"100%"}
        mx={"auto"}
        p={"xl"}
        gap={"md"}
        hiddenFrom="md"
        direction={"column"}
      >
        <Box style={{ flex: 0.3 }}>
          <Stack align={"center"}>
            <Box>
              <Title ta={"center"} order={2} fw={700}>
                Let us Guide You.
              </Title>
              <Title ta={"center"} order={2} fw={700}>
                Frequently Asked Questions.
              </Title>
            </Box>
            <Text size="xs" ta={"center"}>
              Still have questions? We’re here to help! Our team is committed to
              providing you with the information and support you need to make
              the best decision. Whether you're looking for more details or
              personalized assistance, don’t hesitate to reach out—we’d love to
              hear from you!
            </Text>
            <CustomButton variant="filled" color="blue" to='/faqs'>
              Read More
            </CustomButton>
          </Stack>
        </Box>
        <SimpleGrid
          cols={1}
          verticalSpacing={"xl"}
          spacing={"xl"}
          style={{ flex: 0.7 }}
        >
          {faqs.map((faq: FAQ, index: number) => (
            <FAQCards
              key={index}
              {...faq}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default FAQSection;
