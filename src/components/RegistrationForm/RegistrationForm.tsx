import React, { useState } from "react";
import styles from "./registrationForm.module.scss";

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        errorMessage: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setFormData({
                ...formData,
                errorMessage: "Пароли не совпадают",
            });
        } else {
            console.log("Form data:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <img src="/images/logo.svg" alt="" className={styles.logo} />
            <h1 className={styles.formTitle}>Регистрация</h1>
            <p className={styles.formSubtitle}>Мы рады приветствовать новых пользователей!</p>
            <div className={styles.form}>
                <div className={styles.formItem}>
                    <label className={styles.formLabel} htmlFor="email">
                        Почта
                    </label>
                    <input className={styles.formInput} type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="off" />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.formLabel} htmlFor="name">
                        Имя
                    </label>
                    <input className={styles.formInput} type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="off" />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.formLabel} htmlFor="password">
                        Пароль
                        <div className={styles.showPassword} onClick={() => setShowPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                            <img src={showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"} alt="" />
                            {showPassword ? "Скрыть" : "Показать"}
                        </div>
                    </label>
                    <input className={styles.formInput} type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required autoComplete="off" />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.formLabel} htmlFor="confirmPassword">
                        Повтор пароля
                    </label>
                    <input
                        className={styles.formInput}
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>
                <button type="submit" className={styles.formButton}>
                    Приступим
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;
