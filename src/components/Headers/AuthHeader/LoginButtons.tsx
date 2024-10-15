import { Link, useLocation } from "react-router-dom";
import styles from "./authHeader.module.scss";

const LoginButtons = () => {
    const location = useLocation();

    return (
        <div className={styles.loginButtons}>
            <Link className={`${styles.loginButton} ${location.pathname === "/login" ? styles.active : ""}`} to="/login">
                Вход
            </Link>
            <Link className={`${styles.loginButton} ${location.pathname === "/register" ? styles.active : ""}`} to="/register">
                Регистрация
            </Link>
        </div>
    );
};

export default LoginButtons;
