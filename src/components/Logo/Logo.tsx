import styles from "./logo.module.scss";
import LogoIcon from "/images/logo.svg";

interface logoPropsTypes {
    propsStyles?: object;
}

const Logo = ({ propsStyles = {} }: logoPropsTypes) => {
    return (
        <div>
            <div className={styles.logo} style={propsStyles}>
                {/* <img src="/images/logo.svg" alt="" /> */}
                <LogoIcon />
                CodeEngine
            </div>
        </div>
    );
};

export default Logo;
