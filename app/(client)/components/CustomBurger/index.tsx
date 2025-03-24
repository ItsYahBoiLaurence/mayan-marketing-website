"use client";

import { Anchor, Burger, Container, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
    label: "Blogs",
    href: "/blogs",
  },
];

const index = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <Drawer opened={opened} onClose={toggle}>
        <Container py="md">
          <Stack align="center">
            {navItems.map((item, index) => (
              <Anchor key={index} href={item.href}>
                {item.label}
              </Anchor>
            ))}
          </Stack>
        </Container>
      </Drawer>
      <Burger lineSize={4} opened={opened} onClick={toggle} color="jonquil" />
    </>
  );
};

export default index;
