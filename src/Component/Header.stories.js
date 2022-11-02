import React from 'react'
import { ButtonAppBar } from './Header'


export default {
  title: 'Component/Header',
  component: ButtonAppBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ButtonAppBar {...args} />

export const changeBackground = Template.bind({}) //creating a copy of template


