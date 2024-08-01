import { RatingStar } from '@/shared/ui/ratingStar/ratingStar'
import { Meta, StoryFn } from '@storybook/react'

import './ratingStar.module.scss'

export default {
  argTypes: {
    rating: {
      control: {
        max: 5,
        min: 0,
        step: 1,
        type: 'number',
      },
      defaultValue: 0,
      description: 'The rating value to display',
    },
  },
  component: RatingStar,
  title: 'Components/ui/RatingStar',
} as Meta

export const ZeroStars: StoryFn<{ rating: number }> = args => <RatingStar {...args} />
ZeroStars.args = {
  rating: 0,
}

export const OneStar: StoryFn<{ rating: number }> = args => <RatingStar {...args} />
OneStar.args = {
  rating: 1,
}

export const TwoStars: StoryFn<{ rating: number }> = args => <RatingStar {...args} />
TwoStars.args = {
  rating: 2,
}

export const ThreeStars: StoryFn<{ rating: number }> = args => <RatingStar {...args} />
ThreeStars.args = {
  rating: 3,
}

export const FourStars: StoryFn<{ rating: number }> = args => <RatingStar {...args} />
FourStars.args = {
  rating: 4,
}

export const FiveStars: StoryFn<{ rating: number }> = args => <RatingStar {...args} />
FiveStars.args = {
  rating: 5,
}
