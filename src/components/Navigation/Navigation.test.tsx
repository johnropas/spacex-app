import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

it('Instantiates Navigation Component', () => {
  const component = renderer.create(<Router><Navigation /></Router>);
  expect(component).toBeTruthy();
});

it('Renders Navigation Component', () => {
  const component = renderer.create(<Router><Navigation /></Router>);
  expect(component).toMatchSnapshot();
});
