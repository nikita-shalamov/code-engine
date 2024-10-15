import LoginButtons from "./LoginButtons";
import styles from "./authHeader.module.scss";

const AuthHeader = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.logo}>
                <img src="/images/logo.svg" alt="" />
                CodeEngine
            </div>
            <LoginButtons />
        </div>
    );
};

export default AuthHeader;
