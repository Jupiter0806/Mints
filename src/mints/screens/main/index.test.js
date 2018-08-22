import React from 'react';
import { shallow } from 'enzyme';
import MainScreen from './';

it('renders without crashing', () => {
  shallow(<MainScreen />);
});