import styles from "./coursesPagination.module.scss";

const CoursesPagination = () => {
    const active = true;

    return (
        <div className={styles.wrapper}>
            <button className={styles.leftArrow}>
                <img src="/icons/left-arrow.svg" alt="" />
            </button>
            <div className={styles.paginationWrapper}>
                <button className={`${styles.paginationItem} ${active ? styles.active : false}`}>1</button>
                <button className={styles.paginationItem}>2</button>
                <button className={styles.paginationItem}>3</button>
                <button className={styles.paginationItem}>
                    <img src="/icons/pagination-dots.svg" alt="" />
                </button>
                <button className={styles.paginationItem}>67</button>
                <button className={styles.paginationItem}>68</button>
            </div>
            <button className={styles.rightArrow}>
                <img src="/icons/right-arrow.svg" alt="" />
            </button>
        </div>
    );
};

export default CoursesPagination;
