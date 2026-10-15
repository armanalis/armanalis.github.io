import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { navItems } from './components/Navigation';

beforeAll(() => {
  // jsdom lacks these browser APIs.
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
  window.scrollTo = jest.fn();
});

test('every nav button points at a section that exists', () => {
  render(<App />);
  for (const id of ['home', ...navItems.map(([, id]) => id)]) {
    expect(document.getElementById(id)).not.toBeNull();
  }
});
