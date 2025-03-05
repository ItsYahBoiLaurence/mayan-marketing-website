import { Group, Image } from '@mantine/core'
import React from 'react'

const index = () => {
  return (
    <Group h='100%' justify='space-around' p='md'>
      <Image
        radius="md"
        h={50}
        src="/favicon.png"
      />
    </Group>
  )
}

export default index
