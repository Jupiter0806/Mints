import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

it('renders without crashing', () => {
    shallow(<Input />);
});

it('renders without crashing', () => {
    shallow(
        <Input
            lable='input'
            onTextChange={text => text}
            containsError={false}
            type="email"
            />
    );
})