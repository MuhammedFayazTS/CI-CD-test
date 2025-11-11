// ...existing code...
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

describe('Greetings Component', () => {
  it('renders without crashing', () => {
    render(<Greetings name="John" />);
    expect(screen.getByText('Hello John')).toBeTruthy();
  });

  it('displays fallback', () => {
    render(<Greetings />);
    expect(screen.getByText('Hello Guests')).toBeTruthy();
  });
});
// ...existing code...