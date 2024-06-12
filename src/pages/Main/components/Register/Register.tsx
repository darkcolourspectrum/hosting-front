import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { registerUser } from "../../../../store/auth/actionCreators";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './register.css'


const Register = () => {

    const dispatch =  useAppDispatch();
    const [channelName, setChannelName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmedPassword] = useState('');


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(registerUser({  email: login, password, channelName }));
    }

    return (
        <main>
            <div className="main">
                <div className="circle"></div>
                    <form className="signIn" onSubmit={handleSubmit}>
                        <div className="register-form-container">
                            <h1 className="form-title">
                                Регистрация аккаунта
                            </h1>
                            <div className="form-fields">
                                
                                <div className="form-field">
                                    <input name="channel-name" type="text" placeholder="Название канала" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
                                    <FaMoneyCheck className="icon" />
                                </div>

                                <div className="form-field">
                                    <input name="login" type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                                    <FaUser className="icon"/>
                                </div>
                                <div className="form-field">
                                    <input name="password" type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <FaLock className="icon" />
                                </div>
                                <div className="form-field">
                                    <input name="check-password" type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                                    <FaLock className="icon" />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button className="button">Зарегестрироваться</button>
                                {/* <div className="divider">Еще нет аккаунта?</div>
                                <button className="button button-reg">Зарегестрироваться</button> */}
                                <div className="register-link">
                                    <p>
                                        Уже есть аккаунт?
                                        <Link to="/">Войти</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        </main>
    );
};

export default Register;