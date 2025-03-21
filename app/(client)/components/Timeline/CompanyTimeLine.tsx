import { Text, Timeline, TimelineItem } from '@mantine/core'
import React from 'react'

const timelineItems = [
    {
        id: 1,
        description: 'Mayan Solutions is a digital transformation consulting firm founded by seasoned techpreneurs determined to redefine the potential of technology in achieving business success on both regional and international stages. '
    },
    {
        id: 2,
        description: 'Our powerhouse of tech expertise and strategic business insights empowers our clients to achieve their most critical objectives. This is the benchmark of our success. '
    },
    {
        id: 3,

        description: 'Together, we unlock transformative solutions that no one can achieve alone. '
    }
]
const CompanyTimeLine = () => {
    return (
        <div>
            <Timeline>
                {timelineItems.map(item => (
                    <TimelineItem key={item.id}>
                        <Text>{item.description}</Text>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

export default CompanyTimeLine
