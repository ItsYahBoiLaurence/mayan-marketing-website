import { Anchor, Box, Group, Image, Text } from '@mantine/core'
import React from 'react'

type footerNavType = {
  title: string,
  link: string,
}

const footerNav: footerNavType[] = [
  {
    title: 'Sitemap',
    link: '/'
  },
  {
    title: 'Security',
    link: '/'
  },
  {
    title: 'Privacy & Cookie Policy',
    link: '/'
  },
  {
    title: 'Terms of Service',
    link: '/'
  },
]

const index = () => {
  return (
    <Group h='100%' justify='space-around' p='md'>
      <Text size='xs'>© 2025 Mayan Solutions. All rights reserved </Text>
      <Image
        radius="md"
        h={20}
        src="/darkLogo.png"
      />
      <Group>
        {footerNav.map(({ title, link }: footerNavType) => (
          <Text size='xs' key={title}>
            <Anchor href={link}>
              {title} |
            </Anchor>
          </Text>
        ))}
      </Group>
    </Group>
  )
}

export default index
