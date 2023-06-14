import React, { useState } from 'react';
import './css/PencilButton.css';
import TextField from './TextField';

const ImageEditButton = ({ defaultText, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(defaultText);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onSave(text);
    };

    return (
        <div className="image-edit-button">
            <img src="assets/Icon.png" alt="Edit" onClick={handleEditClick} />
            {isEditing ? (
                <TextField value={text} onChange={handleInputChange} />
            ) : (
                <span className="text">{text}</span>
            )}
            {isEditing && (
                <button onClick={handleSaveClick} className="save-button">
                    Save
                </button>
            )}
        </div>
    );
};

export default ImageEditButton;
