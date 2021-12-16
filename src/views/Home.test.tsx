import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home page', () => {
  const component = render(<Home />);
  expect(component).toMatchSnapshot();
});
