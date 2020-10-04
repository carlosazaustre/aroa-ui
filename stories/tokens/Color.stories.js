import React from 'react'
import Token from '../../lib/tokens/Token'
import { choices } from '../../lib/tokens'

export default {
  title: 'Tokens/Colors',
  component: Token.Color,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <Token.Color
    color={choices.color.brand.gold}
    label="var(--color-brand-gold)"
    value={choices.color.brand.gold}
  />
)

function renderColorStory(color) {
  const keys = Object.keys(choices.color[color])
  return (
    <>
      {keys.map((key) => (
        <Token.Color
          key={key}
          label={`var(--color-${color}-${key})`}
          value={choices.color[color][key]}
        />
      ))}
    </>
  )
}

export const Brand = () => renderColorStory('brand')
export const Gray = () => renderColorStory('gray')
export const Red = () => renderColorStory('red')
export const Orange = () => renderColorStory('orange')
export const Yellow = () => renderColorStory('yellow')
export const Green = () => renderColorStory('green')
export const Teal = () => renderColorStory('teal')
export const Blue = () => renderColorStory('blue')
export const Indigo = () => renderColorStory('indigo')
export const Purple = () => renderColorStory('purple')
export const Pink = () => renderColorStory('pink')
