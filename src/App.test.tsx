import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { navItems } from './components/Navigation';
import { posts } from './content';

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

test.each(['/blog', ...posts.flatMap((p) => [`/blog/${p.slug}`, `/${p.slug}`])])('%s renders its page', (path) => {
  window.history.pushState({}, '', path);
  const { getAllByRole } = render(<App />);
  const post = posts.find((p) => path.endsWith(`/${p.slug}`));
  expect(getAllByRole('heading', { level: 1 })[0]).toHaveTextContent(post ? post.title : 'Blog');
  window.history.pushState({}, '', '/');
});
