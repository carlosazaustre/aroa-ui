import React from 'react'
import Avatar from '../../lib/components/molecules/Avatar'

export default {
  title: 'Molecules/Avatar',
  component: Avatar,
  args: {
    // src: 'https://placeimg.com/400/400/people',
  },
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'sm',
}

export const MediumSize = Template.bind({})
MediumSize.args = {
  size: 'md',
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  size: 'lg',
}

export const PrimayType = Template.bind({})
PrimayType.args = {
  type: 'primary',
}

export const SecondaryType = Template.bind({})
SecondaryType.args = {
  type: 'secondary',
}
