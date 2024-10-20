import styles from "./coursesList.module.scss";

const CoursesList = () => {
    const coursesDataTest = [
        {
            id: 1,
            image: "/images/test-photo-course.png",
            rating: 4.8,
            level: "Начинающим",
            title: "Python Basics",
            category: "Программирование",
            color: "#22C55E",
        },
        {
            id: 2,
            image: "/images/test-photo-course.png",
            rating: 4.6,
            level: "Средний",
            title: "JavaScript for Web",
            category: "Программирование",
            color: "#3B82F6",
        },
        {
            id: 3,
            image: "/images/test-photo-course.png",
            rating: 4.9,
            level: "Продвинутый",
            title: "React Native Advanced",
            category: "Мобильная разработка",
            color: "#F59E0B",
        },
        {
            id: 4,
            image: "/images/test-photo-course.png",
            rating: 4.3,
            level: "Начинающим",
            title: "HTML & CSS",
            category: "Веб-дизайн",
            color: "#EF4444",
        },
        {
            id: 5,
            image: "/images/test-photo-course.png",
            rating: 4.7,
            level: "Средний",
            title: "Data Science с Python",
            category: "Анализ данных",
            color: "#22C55E",
        },
        {
            id: 6,
            image: "/images/test-photo-course.png",
            rating: 4.2,
            level: "Начинающим",
            title: "Основы UX/UI",
            category: "Дизайн",
            color: "#3B82F6",
        },
        {
            id: 7,
            image: "/images/test-photo-course.png",
            rating: 4.8,
            level: "Продвинутый",
            title: "Node.js Backend",
            category: "Программирование",
            color: "#F59E0B",
        },
        {
            id: 8,
            image: "/images/test-photo-course.png",
            rating: 4.9,
            level: "Начинающим",
            title: "Основы Кибербезопасности",
            category: "Информационная безопасность",
            color: "#EF4444",
        },
        {
            id: 9,
            image: "/images/test-photo-course.png",
            rating: 4.4,
            level: "Средний",
            title: "Machine Learning",
            category: "Анализ данных",
            color: "#22C55E",
        },
        {
            id: 10,
            image: "/images/test-photo-course.png",
            rating: 4.7,
            level: "Продвинутый",
            title: "Vue.js для профессионалов",
            category: "Программирование",
            color: "#3B82F6",
        },
        {
            id: 11,
            image: "/images/test-photo-course.png",
            rating: 4.6,
            level: "Средний",
            title: "SQL для анализа данных",
            category: "Анализ данных",
            color: "#F59E0B",
        },
        {
            id: 12,
            image: "/images/test-photo-course.png",
            rating: 4.5,
            level: "Начинающим",
            title: "Основы работы с Git",
            category: "Программирование",
            color: "#EF4444",
        },
        {
            id: 13,
            image: "/images/test-photo-course.png",
            rating: 4.6,
            level: "Средний",
            title: "SQL для анализа данных",
            category: "Анализ данных",
            color: "#F59E0B",
        },
        {
            id: 14,
            image: "/images/test-photo-course.png",
            rating: 4.5,
            level: "Начинающим",
            title: "Основы работы с Git",
            category: "Программирование",
            color: "#EF4444",
        },
        {
            id: 15,
            image: "/images/test-photo-course.png",
            rating: 4.6,
            level: "Средний",
            title: "SQL для анализа данных",
            category: "Анализ данных",
            color: "#F59E0B",
        },
        {
            id: 16,
            image: "/images/test-photo-course.png",
            rating: 4.5,
            level: "Начинающим",
            title: "Основы работы с Git",
            category: "Программирование",
            color: "#EF4444",
        },
    ];

    return (
        <div className="container">
            <div className={styles.coursesList}>
                {coursesDataTest.slice(0, 12).map((course) => (
                    <div key={course.id} className={styles.coursesItem}>
                        <div className={styles.coursesImage}>
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className={styles.coursesInfo}>
                            <div className={styles.coursesRating}>
                                <img src="/icons/star.svg" alt="Рейтинг" />
                                {course.rating}
                            </div>
                            <div className={styles.coursesLevel} style={{ backgroundColor: course.color }}></div>
                        </div>
                        <div className={styles.coursesTitle}>{course.title}</div>
                        <div className={styles.coursesFor}>{course.level}</div>
                        <div className={styles.coursesCategory}>{course.category}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesList;
