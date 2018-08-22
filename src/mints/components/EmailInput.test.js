import React from 'react';
import { shallow } from 'enzyme';
import EmailInput from './EmailInput';

it('renders without crashing', () => {
  shallow(<EmailInput />);
});
