import { Link } from "react-router-dom";
import styles from "./homeHeader.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useUserDataContext } from "../../../hooks/сontext/useUserDataContext";

const HomeHeader = () => {
    const { userData } = useUserDataContext();

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
                    <Avatar size={40} icon={<UserOutlined />} src={userData?.Photo} />
                </Link>
            </div>
        </div>
    );
};

export default HomeHeader;
