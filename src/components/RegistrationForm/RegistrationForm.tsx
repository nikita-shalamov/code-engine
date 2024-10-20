import { useEffect, useState } from "react";
import styles from "./registrationForm.module.scss";
import { useForm } from "react-hook-form";
import formDataRegisterTypes from "../../types/formDataRegisterTypes";
import validatePassword from "../../services/validatePasswordService";
import { useWebSocketLogin } from "../../hooks/useWebSocketLogin";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useWebSocketContext } from "../../hooks/сontext/useWebSocketContext";
import { useUserDataContext } from "../../hooks/сontext/useUserDataContext";

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleRequest, loading, result, setResult } = useWebSocketLogin({ method: "Register" });
    const { handleRequest: handleRequestLogin, loading: loadingLogin, result: resultLogin, setResult: setResultLogin } = useWebSocketLogin({ method: "Login" });
    const { setIsAuthenticated, token, sendMessage, response, setAlertMessage } = useWebSocketContext();
    const { setUserData } = useUserDataContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<formDataRegisterTypes>();

    const onSubmit = (data: formDataRegisterTypes) => {
        handleRequest({ Email: data.email, Password: data.password, ConfirmPassword: data.confirmPassword, UserName: data.userName });
    };

    useEffect(() => {
        setResultLogin(null);
        setResult(null);
    }, []);

    const handleCheckUser = () => {
        const checkUserRequest = {
            Controller: "UserService",
            Method: "GetCurrentUser",
            RequestId: token,
        };
        sendMessage(checkUserRequest);
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
        if (result && !result.IsSuccess) {
            setAlertMessage({ typeAlert: "error", text: result.ErrorMessage });
        } else if (result && result?.IsSuccess && result?.Value) {
            setAlertMessage({ typeAlert: "success", text: "Регистрация прошла успешно!" });
            handleRequestLogin({ Email: getValues("email"), Password: getValues("password") });
        }
    }, [result]);

    useEffect(() => {
        if (resultLogin && !resultLogin.IsSuccess) {
            setAlertMessage({ typeAlert: "error", text: resultLogin.ErrorMessage });
        } else if (resultLogin && resultLogin?.IsSuccess && resultLogin?.Value) {
            handleCheckUser();
        }
    }, [resultLogin]);

    const validateConfirmPassword = (value: string) => {
        if (value !== getValues("password")) {
            return "Пароли не совпадают";
        }
        return true;
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src="/images/logo.svg" alt="" className={styles.logo} />
                <h1 className={styles.formTitle}>Регистрация</h1>
                <p className={styles.formSubtitle}>Мы рады приветствовать новых пользователей!</p>
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
                                    message: "Введите почту в корректном формате",
                                },
                            })}
                        />
                        {errors.email && <div className={styles.formError}>{errors.email.message}</div>}
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="name">
                            Имя
                        </label>
                        <input className={styles.formInput} id="name" {...register("userName", { required: "Введите имя" })} />
                        {errors.userName && <div className={styles.formError}>{errors.userName.message}</div>}
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="password">
                            Пароль
                            <div className={styles.showPassword} onClick={() => setShowPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                                <img src={showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"} alt="" />
                                {showPassword ? "Скрыть" : "Показать"}
                            </div>
                        </label>
                        <input
                            className={styles.formInput}
                            type={showPassword ? "text" : "password"}
                            id="password"
                            {...register("password", { required: "Введите пароль", validate: validatePassword })}
                        />
                        {errors.password && <div className={styles.formError}>{errors.password.message}</div>}
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.formLabel} htmlFor="confirmPassword">
                            Повтор пароля
                        </label>
                        <input
                            className={styles.formInput}
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            {...register("confirmPassword", { required: "Повторите пароль", validate: validateConfirmPassword })}
                        />
                        {errors.confirmPassword && <div className={styles.formError}>{errors.confirmPassword.message}</div>}
                    </div>
                    <button type="submit" disabled={loading || loadingLogin} className={styles.formButton}>
                        {loading || loadingLogin ? <Spin indicator={<LoadingOutlined style={{ color: "#ffffff" }} spin />} /> : "Приступим"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default RegistrationForm;
