'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, ButtonProps, ElementProps } from '@mantine/core';

interface CustomButtonProps extends ButtonProps, ElementProps<'button', keyof ButtonProps> {
    to: string;
    children: React.ReactNode;
}

const CustomButton = ({ to, children, ...props }: CustomButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(to);
    }

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    )
}

export default CustomButton
