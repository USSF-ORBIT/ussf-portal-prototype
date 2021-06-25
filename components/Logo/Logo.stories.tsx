import React from 'react'
import { Meta } from '@storybook/react'
import Logo, { LogoProps } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    size: { control: 'number' },
  },
} as Meta

export const DefaultLogo = (args: LogoProps) => <Logo {...args} />
