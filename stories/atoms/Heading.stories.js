import React from 'react'
import Heading from '../../lib/components/atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

const Template = (props) => <Heading {...props} />

export const Default = Template.bind({})
Default.args = {
  children: 'This is a heading',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
  children: 'Primary Color',
  color: 'primary',
}
export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
  children: 'Secondary Color',
  color: 'secondary',
}
export const TertiaryColor = Template.bind({})
TertiaryColor.args = {
  children: 'Tertiary Color',
  color: 'tertiary',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  children: 'Extra Small Size',
  size: 'xs',
}
export const Small = Template.bind({})
Small.args = {
  children: 'Small Size',
  size: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  children: 'Medium Size',
  size: 'md',
}
export const Large = Template.bind({})
Large.args = {
  children: 'Large Size',
  size: 'lg',
}
export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  children: 'Extra Large Size',
  size: 'xl',
}
export const DoubleExtraLarge = Template.bind({})
DoubleExtraLarge.args = {
  children: 'Double Extra Large Size',
  size: '2xl',
}
