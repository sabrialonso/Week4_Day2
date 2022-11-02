import React from 'react'
import { Footer } from './Footer'

export default {
  title: 'Component/Footer',
  component: Footer,
  argTypes: {
    backGroundColor: { control: 'color' },
  },
}

const Template1 = (args) => <Footer {...args} />

export const changeBackground = Template1.bind({}) //creating a copy of template

