import React from 'react';
import { v1 as uuid } from 'uuid';
import { Button } from 'react-bootstrap';

import isFunction from '../helpers/isFunction';

export default ({ options, checkedOption, onSubmit }) => {
    var radioGroupName = uuid();

    var handleSubmit = () => {
        onSubmit && isFunction(onSubmit) && onSubmit(document.querySelector('input[name="' + radioGroupName + '"]:checked').value);
    }

    return (
        <div>
            {options && options.map((option, index) => {
                return (
                    <div key={index}>
                        <input style={{ marginRight: 8 }} type='radio' name={radioGroupName} value={option} defaultChecked={option === checkedOption} />
                        {option}
                        <br />
                    </div>
                )
            })}
            {options && options.length > 0 && <Button style={{ marginTop: 13 }} bsStyle='primary' bsSize='small' onClick={handleSubmit} >Submit</Button>}
        </div>
    )
}