"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle login logic here
    };

    return (
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit}>
                <label className={styles['form-label']}>
                    Username:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label className={styles['form-label']}>
                    Password:
                    <input
                        className={styles['form-input']}
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button className={styles['form-button']} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
