import React, { useState } from 'react';
import './css/EditableTextField.css';

const EditableTextField = ({ initialText }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(initialText);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <div className="editable-text-field">
            {isEditing ? (
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    className="text-field"
                />
            ) : (
                <span className="text">{text}</span>
            )}
            <button onClick={handleEditClick} className="edit-button">
                <i className="fas fa-pencil-alt"></i>
            </button>
            {isEditing && (
                <button onClick={handleSaveClick} className="save-button">
                    Save
                </button>
            )}
        </div>
    );
};

export default EditableTextField;
