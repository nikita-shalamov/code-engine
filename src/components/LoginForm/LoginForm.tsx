import { useEffect, useState } from "react";
import styles from "./loginForm.module.scss";
import { useForm } from "react-hook-form";
import formDataLoginTypes from "../../types/formDataLoginTypes";
import { useWebSocketLogin } from "../../hooks/useWebSocketLogin";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useWebSocketContext } from "../../hooks/сontext/useWebSocketContext";
import { useUserDataContext } from "../../hooks/сontext/useUserDataContext";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formDataLoginTypes>();
    const { handleRequest, loading, result, setResult } = useWebSocketLogin({ method: "Login" });
    const { setIsAuthenticated, token, sendMessage, response, setAlertMessage } = useWebSocketContext();
    const { setUserData } = useUserDataContext();

    useEffect(() => {
        setResult(null);
    }, []);

    const onSubmit = async (data: formDataLoginTypes) => {
        await handleRequest({ Email: data.email, Password: data.password });
    };

    const handleCheckUser = () => {
        const loginRequest = {
            Controller: "UserService",
            Method: "GetCurrentUser",
            RequestId: token,
        };
        sendMessage(loginRequest);
    };

    useEffect(() => {
        if (response && response.Method === "GetCurrentUser") {
            setIsAuthenticated(response.IsSuccess);
            if (response.IsSuccess) {
                setUserData(response.Value);
            }
        }
    }, [response]);

    useEffect(() => {
        if (result) {
            if (!result.IsSuccess) {
                setAlertMessage({ typeAlert: "error", text: result.ErrorMessage });
                setResult(null);
            } else {
                handleCheckUser();
            }
        }
    }, [result]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src="/images/logo.svg" alt="" className={styles.logo} />
                <h1 className={styles.formTitle}>Вход</h1>
                <div className={styles.form}>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="email">
                            Почта
                        </label>
                        <input
                            className={styles.formInput}
                            id="email"
                            {...register("email", {
                                required: "Введите почту",
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Некорретный формат",
                                },
                            })}
                        />
                        {errors.email && <div className={styles.formError}>{errors.email.message}</div>}
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="password">
                            Пароль
                            <div className={styles.showPassword} onClick={() => setShowPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                                <img src={showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"} alt="" />
                                {showPassword ? "Скрыть" : "Показать"}
                            </div>
                        </label>
                        <input className={styles.formInput} type={showPassword ? "text" : "password"} id="password" {...register("password", { required: "Введите пароль" })} />
                        {errors.password && <div className={styles.formError}>{errors.password.message}</div>}
                    </div>
                    <button type="submit" disabled={loading} className={styles.formButton}>
                        {loading ? <Spin indicator={<LoadingOutlined style={{ color: "#ffffff" }} spin />} /> : "Войти в аккаунт"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
