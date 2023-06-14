import React, { useState } from 'react';
import './css/ToggleButton.css';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleButton = () => {
        setIsOn(!isOn);
    };

    return (
        <div
            className={`toggle-button ${isOn ? 'toggle-on' : 'toggle-off'}`}
            onClick={toggleButton}
        >
            <div className={`circle ${isOn ? 'circle-on' : 'circle-off'}`}>
                {isOn ? <span className="tick">&#10003;</span> : <span className="cross">&#10007;</span>}
            </div>
        </div>
    );
};

export default ToggleButton;
