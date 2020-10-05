import React from 'react'
import Label from '../../lib/components/atoms/Label'

export default {
  title: 'Atoms/Label',
  component: Label,
  args: {
    children: 'label',
  },
}

const Template = (args) => <Label {...args} />

export const Default = Template.bind({})

export const InformationLabel = Template.bind({})
InformationLabel.args = {
  appearance: 'information',
}
export const SuccessLabel = Template.bind({})
SuccessLabel.args = {
  appearance: 'success',
}
export const WarningLabel = Template.bind({})
WarningLabel.args = {
  appearance: 'warning',
}
export const DangerLabel = Template.bind({})
DangerLabel.args = {
  appearance: 'danger',
}

export const SmallLabel = Template.bind({})
SmallLabel.args = {
  size: 'sm',
}
export const MediumLabel = Template.bind({})
MediumLabel.args = {
  size: 'md',
}
export const LargeLabel = Template.bind({})
LargeLabel.args = {
  size: 'lg',
}
