import React from 'react';

import Input from './Input';

export default ({ ...props }) => (
    <Input 
        type="text"
        {...props}
        />
)