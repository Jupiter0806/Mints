import React from 'react';
import { shallow } from 'enzyme';
import { Primary } from './primary';

it('renders without crashing', () => {
  shallow(<Primary />);
});
