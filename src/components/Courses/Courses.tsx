import CoursesFilter from "../CoursesFilter/CoursesFilter";
import CoursesList from "../CoursesList/CoursesList";
import CoursesPagination from "../CoursesPagination/CoursesPagination";
import styles from "./courses.module.scss";

const Courses = () => {
    return (
        <div>
            <div className={styles.title}>Список курсов</div>
            <CoursesFilter />
            <CoursesList />
            <CoursesPagination />
        </div>
    );
};

export default Courses;
