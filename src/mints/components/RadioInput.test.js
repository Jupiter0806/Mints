import React from 'react';
import { shallow } from 'enzyme';

import RadioInput from './RadioInput';

it('renders without crashing', () => {
  shallow(<RadioInput />);
});

it('renders without crashing', () => {
  shallow(
    <RadioInput 
      onSubmit={option => option}
      options={['option1', 'option2']}
      />
  );
});