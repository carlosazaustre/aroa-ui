import React from 'react'
import Navbar from '../../lib/components/organisms/Navbar'

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { link: 'Profile', url: '/profile' },
    { link: 'Login', url: '/Login' },
    { link: 'Logout', url: '/Logout' },
  ],
}
