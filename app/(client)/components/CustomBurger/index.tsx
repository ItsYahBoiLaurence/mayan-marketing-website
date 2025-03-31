"use client";

import { Anchor, Burger, Container, Drawer, Image, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import React from "react";

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
    label: "Blog",
    href: "/blog",
  },
];

const index = () => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname()
  console.log(pathname)
  return (
    <>
      <Drawer.Root opened={opened} onClose={toggle} size={'80%'} zIndex={1001}>
        <Drawer.Content>
          <Drawer.Header>
            <Image src={'/mayanLogo.png'} />
            <Drawer.CloseButton c={'jonquil'} size={'xl'} />
          </Drawer.Header>
          <Container py="md">
            <Stack align="start" gap={'md'}>
              {navItems.map((item, index) => (
                <Anchor key={index} href={item.href} bg={pathname === item.href ? 'jonquil' : 'none'} w={'100%'} p={'md'} style={{ borderRadius: '8px' }}>
                  <Text c={'black'}>{item.label}</Text>
                </Anchor>
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
