import React from 'react';

export default ({ label, onTextChange, containsError, type }) => (
    <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
        <label>{label}</label> 
        <input 
            style={
                containsError 
                    ? { border: '1px solid #cb2b45', borderRadius: 2 }
                    : { border: '1px solid #947a6d', borderRadius: 2 }
            }
            type={type} 
            onChange={({ target: { value } }) => onTextChange(value)} 
            /> 
        <br/>
    </div>
)