
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

test('Logo is rendered', () => {
    render(<Logo size={250} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Space Force')
})