/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo component', () => {
  it('renders without a size prop', () => {
    render(<Logo />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Space Force')
  })

  it('renders with a size prop', () => {
    render(<Logo size={250} />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Space Force')
  })
})
