import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Badge, ColorSwatch, Paper, Stack, Text } from "@mantine/core"
import classes from "./Accordion.module.css"
import { IconMapSearch, IconPlus } from '@tabler/icons-react';
type AccordionType = {
    title: string,
    category: string,
    content: string
}
// 
const index = ({ title, category, content }: AccordionType) => {
    return (
        <Paper withBorder radius={'lg'} style={{ overflow: "hidden" }}>
            <Accordion
                classNames={{ chevron: classes.chevron }}
                chevron={<IconPlus className={classes.icon} />}
                pt='xs'
            >
                <AccordionItem key={title} value={title}>
                    <AccordionControl >
                        <Stack gap={'md'}>
                            <Badge color="blue" size="lg" radius="sm" bg={category === 'Development' ? '#FCCF56' : '#596B93'} autoContrast>{category}</Badge>
                            <Text size="lg" fw={700}>{title}</Text>
                        </Stack>
                    </AccordionControl>
                    <AccordionPanel py='sm'>{content}</AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Paper>

    )
}

export default index
