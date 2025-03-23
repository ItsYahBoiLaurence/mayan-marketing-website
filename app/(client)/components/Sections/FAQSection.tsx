import {
  Box,
  Button,
  Card,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import FAQCards from "../Cards/FAQCards";
type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Are you an application development company?",
    answer:
      "Yes, but we're more than that! At Mayan, we combine tech expertise with strategic tech advisory to ensure your apps align with your business goals. We also provide comprehensive IT support and internal training—from app development to ongoing maintenance—ensuring every step takes you to success.",
    category: "Development",
  },
  {
    id: 2,
    question:
      "I’m looking for a mobile app development company, why should I choose Mayan?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    category: "Mobile App",
  },
  {
    id: 3,
    question: "Do you have a team of mobile app developers to work on my app?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    category: "Mobile App",
  },
  {
    id: 4,
    question: "What kind of app development project do you currently work on?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    category: "Development",
  },
];

const FAQSection = () => {
  return (
    <>
      <Flex w={"80%"} mx={"auto"} p={"xl"} gap={"md"} visibleFrom="md">
        <Box style={{ flex: 0.3 }}>
          <Card>
            <Stack>
              <Box>
                <Title order={2} fw={700}>
                  Let us Guide You.
                </Title>
                <Title order={2} fw={700}>
                  Frequently Asked Questions.
                </Title>
              </Box>
              <Text size="xs">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </Text>
              <Button variant="filled" color="blue">
                Read More
              </Button>
            </Stack>
          </Card>
        </Box>
        <SimpleGrid
          cols={2}
          verticalSpacing={"xl"}
          spacing={"xl"}
          style={{ flex: 0.7 }}
        >
          {faqs.map(({ id, question, answer, category }) => (
            <FAQCards
              key={id}
              id={id}
              question={question}
              answer={answer}
              category={category}
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
            <Button variant="filled" color="blue" radius={"xl"}>
              Read More
            </Button>
          </Stack>
        </Box>
        <SimpleGrid
          cols={1}
          verticalSpacing={"xl"}
          spacing={"xl"}
          style={{ flex: 0.7 }}
        >
          {faqs.map(({ id, question, answer, category }) => (
            <FAQCards
              key={id}
              id={id}
              question={question}
              answer={answer}
              category={category}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default FAQSection;
