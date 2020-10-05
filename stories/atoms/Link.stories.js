import React from 'react'
import Link from '../../lib/components/atoms/Link'

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    children: 'Click me!',
    href: 'https://aroa.dev',
  },
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {}
