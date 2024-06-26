import React, { forwardRef,useState } from "react";
import "./PasswordInput.css";

const PasswordInput = forwardRef(({ label, placeholder, name, value, onChange }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [isFocused, setIsFocused] = useState(false);


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="password-container">
            <div className="label-container">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className={`pass-container ${isFocused ? 'scale' : ''}`}>
                <input
                    className="pass-internal"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <button className="btn-show-pass" type="button" onClick={togglePasswordVisibility}>
                    {!isPasswordVisible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                </button>
            </div>
        </div>
    );
});

export default PasswordInput;
