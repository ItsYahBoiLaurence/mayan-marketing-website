import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Badge, ColorSwatch, Paper, Stack, Text } from "@mantine/core"
import classes from "./Accordion.module.css"
import { IconMapSearch, IconPlus } from '@tabler/icons-react';
type AccordionType = {
    question: string,
    category: string,
    answer: string
}
// 
const index = ({ question, category, answer }: AccordionType) => {
    return (
        <Paper withBorder radius={'lg'} style={{ overflow: "hidden" }}>
            <Accordion
                classNames={{ chevron: classes.chevron }}
                chevron={<IconPlus className={classes.icon} />}
                pt='xs'
                visibleFrom="md"
            >
                <AccordionItem key={question} value={question}>
                    <AccordionControl >
                        <Stack gap={'md'}>
                            <Badge color="blue" size="lg" radius="sm" bg={category === 'Development' ? '#FCCF56' : '#596B93'} autoContrast>{category}</Badge>
                            <Text size="lg" fw={700}>{question}</Text>
                        </Stack>
                    </AccordionControl>
                    <AccordionPanel py='sm'>{answer}</AccordionPanel>
                </AccordionItem>
            </Accordion>


            <Accordion
                classNames={{ chevron: classes.chevron }}
                chevron={<IconPlus className={classes.icon} />}
                pt='xs'
                hiddenFrom="md"
            >
                <AccordionItem key={question} value={question}>
                    <AccordionControl >
                        <Stack gap={'md'}>
                            <Badge color="blue" size="lg" radius="sm" bg={category === 'Development' ? '#FCCF56' : '#596B93'} autoContrast>{category}</Badge>
                            <Text size="md" fw={700}>{question}</Text>
                        </Stack>
                    </AccordionControl>
                    <AccordionPanel py='sm'>
                        <Text size="xs">{answer}</Text></AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Paper>

    )
}

export default index
