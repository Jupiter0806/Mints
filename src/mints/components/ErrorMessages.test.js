import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessages from './ErrorMessages';

it('renders without crashing', () => {
  shallow(<ErrorMessages />);
});

it('renders with error messages and without crashing', () => {
  shallow(<ErrorMessages errorMessages={['error1', 'error2']} />);
});
