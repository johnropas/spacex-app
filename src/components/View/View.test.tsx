import React from 'react';
import renderer from 'react-test-renderer';
import View from './View';

it('Instantiates View Component', () => {
  const component = renderer.create(<View />);
  expect(component).toBeTruthy();
});

it('Renders View Component', () => {
  const component = renderer.create(<View />);
  expect(component).toMatchSnapshot();
});
