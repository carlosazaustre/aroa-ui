import React from 'react'
import Input from '../../lib/components/atoms/Input'

export default {
  title: 'Molecules/Input',
  component: Input,
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder text...',
    onChange: () => {},
  },
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'input-story-1',
}

export const ErrorInput = Template.bind({})
ErrorInput.args = {
  id: 'input-story-2',
  error: true,
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
  id: 'input-story-3',
  disabled: true,
}

export const HelperTextInput = Template.bind({})
HelperTextInput.args = {
  id: 'input-story-4',
  helperText: 'Some interesting text',
}

export const HelperTextErrorInput = Template.bind({})
HelperTextErrorInput.args = {
  id: 'input-story-2',
  helperText: 'Some interesting text',
  error: true,
}

export const StartIconInput = Template.bind({})
StartIconInput.args = {
  id: 'input-story-5',
  startIcon: 'mail',
}

export const EndIconInput = Template.bind({})
EndIconInput.args = {
  id: 'input-story-6',
  endIcon: 'privateFill',
}
