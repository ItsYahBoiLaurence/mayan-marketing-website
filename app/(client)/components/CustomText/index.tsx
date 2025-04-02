import { Text, TextProps } from "@mantine/core"

interface CustomTextProps extends TextProps {
    text: string
}

const index = ({ text, ...props }: CustomTextProps) => {
    const words = text.trim().split(' ')
    const lastWord = words.pop()
    const firstPart = words.join(' ')
    return (
        <Text {...props}>
            {firstPart} <span style={{ color: "#FFCD15" }}>{lastWord}</span>
        </Text>
    )
}

export default index
