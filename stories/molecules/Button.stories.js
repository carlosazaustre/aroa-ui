import React from 'react'
import Button from '../../lib/components/molecules/Button'

export default {
  title: 'Molecules/Button',
  component: Button,
  args: {
    children: 'Button',
    onClick: (event) => {
      console.log(event)
    },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DefaultColorButton = Template.bind({})
DefaultColorButton.args = {
  color: 'default',
}

export const PrimaryColorButton = Template.bind({})
PrimaryColorButton.args = {
  color: 'primary',
}

export const SuccessColorButton = Template.bind({})
SuccessColorButton.args = {
  color: 'success',
}

export const DangerColorButton = Template.bind({})
DangerColorButton.args = {
  color: 'danger',
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  variant: 'outline',
}

export const TextButton = Template.bind({})
TextButton.args = {
  variant: 'text',
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  disabled: true,
}

export const DisabledTextButton = Template.bind({})
DisabledTextButton.args = {
  variant: 'text',
  disabled: true,
}

export const StartIconButton = Template.bind({})
StartIconButton.args = {
  color: 'primary',
  startIcon: 'contactAdd',
}

export const EndIconButton = Template.bind({})
EndIconButton.args = {
  color: 'primary',
  endIcon: 'contactOk',
}

export const SmallSizeButton = Template.bind({})
SmallSizeButton.args = {
  color: 'primary',
  size: 'sm',
}

export const MediumSizeButton = Template.bind({})
MediumSizeButton.args = {
  color: 'primary',
  size: 'md',
}

export const LargeSizeButton = Template.bind({})
LargeSizeButton.args = {
  color: 'primary',
  size: 'lg',
}
