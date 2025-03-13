import React from 'react'
import { Text } from '@mantine/core';

const CustomText = ({
    children,
    ...props
}: {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Text>) => {
    return (
        <Text c="white" size='sm' {...props}>{children}</Text>
    );
}

export default CustomText
