import { Anchor, Group, Image, Paper, Text } from "@mantine/core";
import React from "react";
import CustomBurger from "../CustomBurger";

const navItems = [
  {
    label: "Our Services",
    href: "/our-services",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Articles",
    href: "/articles",
  },
];

const Navbar = () => {
  return (
    <header>
      <Group
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        w="100%"
        justify="space-between"
        p="md"
        wrap="nowrap"
        hiddenFrom="md"
      >
        <Anchor href="/">
          <Image radius="md" h={40} src="/favicon.png" alt="logo" />
        </Anchor>
        <CustomBurger />
      </Group>
      <Group
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        w="100%"
        justify="space-around"
        p="md"
        visibleFrom="md"
      >
        <Anchor href="/">
          <Image radius="md" h={50} src="/favicon.png" alt="logo" />
        </Anchor>
        <Paper radius="xl" px="xl" py="sm" bg="#001B59">
          <Group gap="xl">
            {navItems.map((item) => (
              <Anchor key={item.href} href={item.href} c={"white"}>
                <Text>{item.label}</Text>
              </Anchor>
            ))}
          </Group>
        </Paper>
        <Anchor href="/contact-us">
          <Paper bg="white" px="xl" py="sm" radius="xl">
            <Text c={"black"}>{"Let's Talk"}</Text>
          </Paper>
        </Anchor>
      </Group>
    </header>
  );
};

export default Navbar;
