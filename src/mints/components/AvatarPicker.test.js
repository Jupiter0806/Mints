import React from 'react';
import { shallow } from 'enzyme';
import AvatarPicker from './AvatarPicker';

it('renders without crashing', () => {
  shallow(<AvatarPicker />);
});
