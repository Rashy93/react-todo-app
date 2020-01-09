import React from 'react';

import './form-input.styles.scss'

const TextArea = ({ handleChange, label, ...otherProps}) => (
    <div className="group">
        <textarea className='form-textarea' onChange={handleChange} {...otherProps} />
        {label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-textarea-label`}
            >
                {label}
            </label>
            ) : null}
    </div>
)
export default TextArea;