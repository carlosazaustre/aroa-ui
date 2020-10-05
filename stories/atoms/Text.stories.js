import React from 'react'
import Text from '../../lib/components/atoms/Text'

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}

const Template = (props) => <Text {...props} />

export const Default = Template.bind({})
Default.args = {}

export const DarkColor = Template.bind({})
DarkColor.args = {
  color: 'dark',
}
export const LightColor = Template.bind({})
LightColor.args = {
  color: 'light',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}
