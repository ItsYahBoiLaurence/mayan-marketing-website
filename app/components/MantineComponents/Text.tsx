import React from 'react'
import { Text } from '@mantine/core';

const CustomText = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Text c="white" size='sm'>{children}</Text>
    )
}

export default CustomText
