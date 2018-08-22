import React from 'react';
import { Alert } from 'react-bootstrap';

export default ({ errorMessages }) => (
    <Alert bsStyle="danger">
        <ul>
            {errorMessages && errorMessages.map((errorMessage, index) => <li key={index}>{errorMessage}</li>)}
        </ul>
    </Alert>
)
