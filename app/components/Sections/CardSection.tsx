import { Center, Group, Paper, SimpleGrid } from "@mantine/core"
import CaseStudyCard from "../Cards/CaseStudyCard"

const CardSection = () => {
    const case_studies = [
        {
            id: 1,
            title: 'Analytics for employee well-being',
            brief_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            link: 'hello',
        },
        {
            id: 2,
            title: 'Analytics for employee well-being',
            brief_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            link: 'hello',
        },
        {
            id: 3,
            title: 'Analytics for employee well-being',
            brief_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            link: 'hello',
        },
    ]

    return (
        <Group justify="center" p={'md'} style={{ marginTop: '-70px', zIndex: 1, position: 'relative' }}>
            <SimpleGrid cols={3} verticalSpacing={'md'}>
                {case_studies.map(({ id, title, brief_description, link }, index) => (
                    <Center key={id}>
                        <CaseStudyCard cardStyle={(index + 1)} />
                    </Center>
                ))}
            </SimpleGrid>
        </Group>
    )
}

export default CardSection
