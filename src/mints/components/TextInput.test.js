import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

it('renders without crashing', () => {
  shallow(<TextInput />);
});
