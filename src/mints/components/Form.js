import React from 'react';

export default ({ inputs, buttons }) => (
    <div>
        <div>
            {inputs && inputs.map((element, index) => <div key={index}>{element}</div>)}
        </div>

        <div style={{
                textAlign: 'center',
            }}>
            {buttons && buttons.map((element, index) => <div key={index}>{element}</div>)}
        </div>
    </div>
)