import React from 'react';
import { Alert } from 'react-bootstrap';

export default ({ errorMessages }) => (
    <Alert bsStyle="danger">
        <ul>
            {console.log(errorMessages)}
            {errorMessages && errorMessages.map((errorMessage, index) => <li key={index}>{errorMessage}</li>)}
        </ul>
    </Alert>
)
