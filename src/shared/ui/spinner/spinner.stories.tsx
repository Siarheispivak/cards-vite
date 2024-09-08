import { BrowserRouter } from 'react-router-dom'

import { Spinner } from '@/shared/ui/spinner'
import { Meta } from '@storybook/react'

const meta: Meta = {
  component: Spinner,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  title: 'Components/Spinner',
}

export default meta

export const Default = () => <Spinner />
