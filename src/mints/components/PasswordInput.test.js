import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from './PasswordInput';

it('renders without crashing', () => {
  shallow(<PasswordInput />);
});
