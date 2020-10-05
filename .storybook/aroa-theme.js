import { create } from '@storybook/theming/create'
import { decisions } from '../lib/tokens'

export default create({
  base: 'light',

  colorPrimary: decisions.color.secondary,
  colorSecondary: decisions.color.primary,
  barSelectedColor: decisions.color.primary,
  brandTitle: 'aroa-UI',
  brandUrl: 'https://aroa.dev',
  brandImage: 'images/theme-logo.png',
})
