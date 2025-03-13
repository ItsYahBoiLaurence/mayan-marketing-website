import { Text, Timeline, TimelineItem } from '@mantine/core'
import React from 'react'

const timelineItems = [
    {
        id: 1,
        title: 'Founded in 2022 by seasoned tech entrepreneur Kim Montano',
        description: 'Mayan Solutions confronts a tech challenge; aligning technology with business goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
    },
    {
        id: 2,
        title: 'Founded in 2022 by seasoned tech entrepreneur Kim Montano',
        description: 'Mayan Solutions confronts a tech challenge; aligning technology with business goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
    },
    {
        id: 3,
        title: 'Founded in 2022 by seasoned tech entrepreneur Kim Montano',
        description: 'Mayan Solutions confronts a tech challenge; aligning technology with business goals. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
    }
]
const CompanyTimeLine = () => {
    return (
        <div>
            <Timeline>
                {timelineItems.map(item => (
                    <TimelineItem key={item.id}>
                        <Text size='lg' fw={700}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

export default CompanyTimeLine
