import React, { useState, useRef } from "react";
import Header from "../../components/header";
import Input from "../../components/input";
import PasswordInput from "../../components/passInput/PasswordInput";
import "../login/login.css";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const passConfirmRef = useRef();

    const {setUser,setToken} = useStateContext();

    const validatePassword = (password, confirmPassword) => {
        const passwordCriteria = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
        if (!passwordCriteria.test(password)) {
            setPasswordError("A senha deve ter no mínimo 8 caracteres, 1 número, 1 letra maiúscula e 1 caractere especial.");
            return false;
        }
        if (password !== confirmPassword) {
            setPasswordError("As senhas não coincidem.");
            return false;
        }
        setPasswordError("");
        return true;
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (validatePassword(password, confirmPassword)) {
            handleSignup(e)
        }
    };

    const handleSignup = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            pass: passRef.current.value,
            passConfirm: passConfirmRef.current.value
        };
        console.log(payload)
        axiosClient.post('/signup',payload)
            .then(({data}) => {
                setToken(data.token);
                setUser(data.user);
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
            };

    return (
        <div className="content">
            <Header />
            {isLogin ? (
                <div className="signup">
                    <div className="control">
                        <h2>LOGIN</h2>
                        <form>
                            <Input 
                                label="Email" 
                                placeholder="Digite seu email..."
                                type="text"
                                name="email"
                                ref={emailRef}
                            />
                            <PasswordInput
                                label="Senha" 
                                placeholder="Digite sua senha..."
                                name="senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </form>
                        <span className="forgot-pass">Esqueceu sua senha?</span>
                        <div className="signup-footer">
                            <span className="change-page" onClick={() => setIsLogin(false)}>Criar Conta</span>
                            <button className="btn-submit" onClick={() => test()}>Entrar</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="signup">
                    <div className="control">
                        <h2>REGISTRAR</h2>
                        <form >
                            <Input 
                                label="Email" 
                                placeholder="Digite seu email..."
                                type="text"
                                name="email"
                                ref={emailRef}
                            />
                            <Input
                                label="Nome" 
                                placeholder="Digite seu Nome Completo..."
                                type="text"
                                name="name"
                                ref={nameRef}
                            />
                            <PasswordInput
                                label="Senha" 
                                placeholder="Digite sua senha..."
                                name="senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ref={passRef}
                            />
                            <PasswordInput
                                label="Confirmar Senha" 
                                placeholder="Confirme sua senha..."
                                name="confirmar_senha"
                                value={confirmPassword}
                                ref={passConfirmRef}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {passwordError && <p className="error"><i className="fa-solid fa-circle-exclamation"></i>{passwordError}</p>}
                            <div className="signup-footer">
                                <span className="change-page" onClick={() => setIsLogin(true)}>Login</span>
                                <button type="submit" className="btn-submit" onClick={handleRegisterSubmit}>Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
