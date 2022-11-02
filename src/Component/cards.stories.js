
import React from 'react'
import { MediaCard } from './Cards'



export default {
  title: 'Component/MediaCard',
  component: MediaCard,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template = (args) => <MediaCard {...args} />

export const changecolor = Template.bind({}) //creating a copy of template

