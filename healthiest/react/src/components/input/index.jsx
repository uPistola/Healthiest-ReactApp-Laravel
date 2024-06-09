import React, { forwardRef,useState } from "react";
import "../input/input.css";

const Input = forwardRef(({ label, type, placeholder, name }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="input-container">
            <div className="label-container">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className={`form-container ${isFocused ? 'scale' : ''}`}>
                <input
                    type={type}
                    name={name}
                    ref={ref}
                    className="input-internal"
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
            <div className="error-container"></div>
        </div>
    );
});

export default Input;
