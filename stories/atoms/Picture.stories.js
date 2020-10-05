import React from 'react'
import Picture from '../../lib/components/atoms/Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
  args: {
    width: 200,
    src: 'https://placeimg.com/400/400/any',
    alt: 'image',
  },
}

const Template = (args) => <Picture {...args} />

export const Default = Template.bind({})

export const ImageRounded = Template.bind({})
ImageRounded.args = {
  isRounded: true,
}
