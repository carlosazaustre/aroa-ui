import React from 'react'
import Spacer from '../../lib/components/layout/Spacer'

export default {
  title: 'Layout/Spacer/Default',
  component: Spacer,
  args: {
    isVisible: true,
  },
}

const Template = (props) => <Spacer {...props} />

export const Default = Template.bind({})

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
