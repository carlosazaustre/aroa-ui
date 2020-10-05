import React from 'react'
import Icon from '../../lib/components/atoms/Icon'
import { iconTypes } from '../../lib/components/atoms/Icon/helpers'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

const Template = (props) => <Icon {...props} />

export const Default = Template.bind({})
Default.args = {
  type: 'public',
  size: 'md',
}

function renderIconStory() {
  const keys = Object.keys(iconTypes)
  return (
    <>
      {keys.map((key) => (
        <div key={key} style={{ display: 'flex', padding: '5px' }}>
          <Icon type={key} size="xl" />
          <div
            style={{
              backgroundColor: '#fafafa',
              borderRadius: '10px',
              border: '1px solid #eaeaea',
              fontSize: '1.2rem',
              padding: '1.2rem',
              textAlign: 'center',
            }}
          >
            {key}
          </div>
        </div>
      ))}
    </>
  )
}

export const Icons = () => renderIconStory()
