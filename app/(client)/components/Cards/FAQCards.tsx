import { Badge, Card, Stack, Text } from "@mantine/core";
import React from "react";

type FAQType = {
  question: string;
  answer: string;
  category: string;
};

const FAQCards = ({ question, answer, category }: FAQType) => {
  return (
    <Card withBorder>
      <Stack>
        <Badge size="md" radius="xs" color="#E9E9E9" autoContrast>
          <Text size="xs" fw={300}>
            {category}
          </Text>
        </Badge>
        <Text size="md" fw={700}>
          {question}
        </Text>
        <Text size="xs">{answer}</Text>
      </Stack>
    </Card>
  );
};

export default FAQCards;
