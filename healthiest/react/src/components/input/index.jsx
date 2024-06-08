import React, { forwardRef } from "react";
import "../input/input.css";

const Input = forwardRef(({ label, type, placeholder, name }, ref) => {
    return (
        <div className="input-container">
            <div className="label-container">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className="form-container">
                <input
                    type={type}
                    name={name}
                    ref={ref}
                    className="input-internal"
                    placeholder={placeholder}
                />
            </div>
            <div className="error-container"></div>
        </div>
    );
});

export default Input;
