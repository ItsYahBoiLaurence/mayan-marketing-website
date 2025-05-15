import { Button, Text } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

export default async function button({ data }: any) {
    return (
        <Button style={{ backgroundColor: 'rgba(0, 31, 101, 1)' }} size="lg" leftSection={<IconDownload stroke={2} />} >
            <Text tt={'uppercase'}>Download the full report</Text>
        </Button>
    )
}