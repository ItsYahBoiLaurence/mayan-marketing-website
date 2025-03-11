import { BackgroundImage, Box, Button, Card, CardSection, Group, Image, Paper, SimpleGrid, Text, Title } from '@mantine/core'


type CardStylingProp = {
    cardStyle: number
}

const CaseStudyCard = ({ cardStyle }: CardStylingProp) => {
    return (
        <div>
            {cardStyle % 3 === 0 ? (
                <Paper bg={'yellow'} w={200} h={230}>
                    yellow
                </Paper>
            ) : cardStyle % 3 === 1 ? (
                <Paper bg={'blue'} w={200} h={230}>
                    blue
                </Paper>
            ) : (
                <Paper bg={'gray'} w={200} h={250}>
                    gray
                </Paper>
            )
            }
        </div>
    )
}

export default CaseStudyCard
