import { Paper } from '@mantine/core'
import { client } from '@/sanity/lib/client'

type CardStylingProp = {
    cardStyle: number
}

async function getPosts() {
    const query = `*[_type == "case-studies"]`
    return await client.fetch(query)
}

const CaseStudyCard = async ({ cardStyle }: CardStylingProp) => {

    const post = await getPosts()
    console.log(`Post: ${post}`)
    post.map((post: any) => {
        console.log(`Post: ${post.title}`)
    })

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
