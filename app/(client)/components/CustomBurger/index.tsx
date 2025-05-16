"use client";

import { Anchor, Burger, Button, Container, Drawer, Image, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Services",
    href: "/our-services",
  },
  // {
  //   label: "Case Studies",
  //   href: "/case-studies",
  // },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Articles",
    href: "/articles",
  },
];

const index = () => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname()
  const router = useRouter()
  const [active, setActive] = useState(pathname)

  const handleClick = (href: string) => {
    setActive(href)
    router.push(href)
    toggle()
  }

  return (
    <>
      <Drawer.Root opened={opened} onClose={toggle} size={'80%'} zIndex={1001}>
        <Drawer.Content>
          <Drawer.Header>
            <Image src={'/mayanLogo.png'} />
          </Drawer.Header>
          <Container py="md">
            <Stack align="start" gap={'md'}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  component="a"
                  size="lg"
                  justify="start"
                  href={item.href}
                  bg={active === item.href ? 'jonquil' : 'none'}
                  w={'100%'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}>
                  <Text c={'black'}>{item.label}</Text>
                </Button>
              ))}
            </Stack>
          </Container>
        </Drawer.Content>
      </Drawer.Root>
      <Burger lineSize={4} opened={opened} onClick={toggle} color="jonquil" />
    </>
  );
};

export default index;
