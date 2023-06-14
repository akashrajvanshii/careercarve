import React from 'react';
import './css/TextField.css';

const TextField = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="text-field"
        />
    );
};

export default TextField;
