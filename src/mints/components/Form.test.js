import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';
import TextInput from './TextInput';

it('renders without crashing', () => {
  shallow(<Form />);
});

it('renders without crashing', () => {
  shallow(
    <Form 
      inputs={[<TextInput />, <TextInput />]}
      buttons={[<button>submit</button>]}
      />
  );
});
