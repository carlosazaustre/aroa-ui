import React from 'react'
import Input from '../../lib/components/atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  placeholder: 'Placeholder text...',
  onChange: () => {},
}
