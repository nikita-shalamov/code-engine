import { Link } from "react-router-dom";
import styles from "./homeHeader.module.scss";

const HomeHeader = () => {
    return (
        <div className={styles.homeHeader}>
            <div className={styles.leftCol}>
                <button className={styles.sidebarButton}>
                    <img src="/icons/burger.svg" alt="" />
                </button>
                <Link to="/" className={styles.logo}>
                    <img src="/images/logo.svg" alt="" />
                    CodeEngine
                </Link>
            </div>
            <div className={styles.userProfile}>
                <button className={styles.notifications}>
                    <img src="/icons/ring.svg" alt="" />
                </button>
                <Link className={styles.userAvatar} to="/profile">
                    <img src="/images/avatar.png" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default HomeHeader;
