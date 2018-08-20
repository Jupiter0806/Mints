import React from 'react';

export default ({ errorMessages }) => (
    <ul>
        {errorMessages && errorMessages.map((errorMessage, index) => <li key={index}>{errorMessage}</li>)}
    </ul>
)
