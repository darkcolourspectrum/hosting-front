import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { loginUser } from "../../../../store/auth/actionCreators";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './login.css'


const Login = () => {

    const dispatch =  useAppDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(loginUser({ email: login, password }));
    }

    return (
        <main>
            <div className="main">
                <div className="circle"></div>
                    <form className="signIn" onSubmit={handleSubmit}>
                        <div className="register-form-container">
                            <h1 className="form-title">
                                Вход
                            </h1>
                            <div className="form-fields">
                                <div className="form-field">
                                    <input name="login" type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                                    <FaUser className="icon"/>
                                </div>
                                <div className="form-field">
                                    <input name="password" type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <FaLock className="icon" />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button className="button">Войти</button>
                                {/* <div className="divider">Еще нет аккаунта?</div>
                                <button className="button button-reg">Зарегестрироваться</button> */}
                                <div className="register-link">
                                    <p>
                                        Еще нет аккаунта? 
                                        <Link to="/register">Зарегистрироваться</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        </main>
    );
};

export default Login;

// Remeber-forgot password