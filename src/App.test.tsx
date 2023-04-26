// Package
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

// Application
import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    // expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    //   'Hello World'
    // );
  });
});
