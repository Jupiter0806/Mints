import React from 'react';
import { shallow } from 'enzyme';
import { Mints } from './Mints';

it('renders without crashing', () => {
  shallow(<Mints />);
});
