import { Badge, Card, Stack, Text } from '@mantine/core'
import React from 'react'

type FAQType = {
    id: number;
    question: string;
    answer: string;
    category: string;
}

const FAQCards = ({ id, question, answer, category }: FAQType) => {
    return (
        <Card key={id}>
            <Stack>
                <Badge size="xl" radius="xs" color='#E9E9E9' autoContrast><Text size='xs' fw={300}>{category}</Text></Badge>
                <Text size='lg' fw={700}>{question}</Text>
                <Text size='sm'>{answer}</Text>
            </Stack>
        </Card>
    )
}

export default FAQCards
