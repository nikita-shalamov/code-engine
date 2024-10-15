import { useState, useEffect, useRef } from "react";
import styles from "./coursesFilter.module.scss";

const CoursesFilter = () => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const filterRefs = {
        type: useRef<HTMLDivElement>(null),
        status: useRef<HTMLDivElement>(null),
        difficulty: useRef<HTMLDivElement>(null),
        sort: useRef<HTMLDivElement>(null),
    };

    const toggleFilter = (filterName: string) => {
        setOpenFilter((prevFilter) => (prevFilter === filterName ? null : filterName));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            filterRefs.type.current &&
            !filterRefs.type.current.contains(event.target as Node) &&
            filterRefs.status.current &&
            !filterRefs.status.current.contains(event.target as Node) &&
            filterRefs.difficulty.current &&
            !filterRefs.difficulty.current.contains(event.target as Node) &&
            filterRefs.sort.current &&
            !filterRefs.sort.current.contains(event.target as Node)
        ) {
            setOpenFilter(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="container">
            <div className={styles.wrapper}>
                <form className={styles.searchField} role="search">
                    <label htmlFor="searchInput" className={styles.searchIcon}>
                        <img src="/icons/search.svg" alt="Search icon" />
                    </label>
                    <input id="searchInput" className={styles.searchInput} placeholder="Поиск" aria-label="Search courses" />
                </form>
                <div className={styles.filters}>
                    <div className={styles.filterWrapper} ref={filterRefs.type}>
                        <button
                            className={`${styles.filterItem} ${openFilter === "type" ? styles.open : ""}`}
                            onClick={() => toggleFilter("type")}
                            aria-expanded={openFilter === "type"}
                            aria-controls="typeFilterList"
                        >
                            Тип
                            <img src="/icons/bottom-arrow.svg" alt={openFilter === "type" ? "Close filters" : "Open filters"} />
                        </button>
                        {openFilter === "type" && (
                            <ul id="typeFilterList" className={styles.filterList}>
                                <li className={styles.filterValue}>Тип 1</li>
                                <li className={styles.filterValue}>Тип 2</li>
                                <li className={styles.filterValue}>Тип 3</li>
                            </ul>
                        )}
                    </div>
                    <div className={styles.filterWrapper} ref={filterRefs.status}>
                        <button
                            className={`${styles.filterItem} ${openFilter === "status" ? styles.open : ""}`}
                            onClick={() => toggleFilter("status")}
                            aria-expanded={openFilter === "status"}
                            aria-controls="statusFilterList"
                        >
                            Статус
                            <img src="/icons/bottom-arrow.svg" alt={openFilter === "status" ? "Close filters" : "Open filters"} />
                        </button>
                        {openFilter === "status" && (
                            <ul id="statusFilterList" className={styles.filterList}>
                                <li className={styles.filterValue}>Статус 1</li>
                                <li className={styles.filterValue}>Статус 2</li>
                                <li className={styles.filterValue}>Статус 3</li>
                            </ul>
                        )}
                    </div>
                    <div className={styles.filterWrapper} ref={filterRefs.difficulty}>
                        <button
                            className={`${styles.filterItem} ${openFilter === "difficulty" ? styles.open : ""}`}
                            onClick={() => toggleFilter("difficulty")}
                            aria-expanded={openFilter === "difficulty"}
                            aria-controls="difficultyFilterList"
                        >
                            Уровень сложности
                            <img src="/icons/bottom-arrow.svg" alt={openFilter === "difficulty" ? "Close filters" : "Open filters"} />
                        </button>
                        {openFilter === "difficulty" && (
                            <ul id="difficultyFilterList" className={styles.filterList}>
                                <li className={styles.filterValue}>Лёгкий</li>
                                <li className={styles.filterValue}>Средний</li>
                                <li className={styles.filterValue}>Сложный</li>
                            </ul>
                        )}
                    </div>
                    <div className={styles.filterWrapper} ref={filterRefs.sort}>
                        <button
                            className={`${styles.filterItem} ${openFilter === "sort" ? styles.open : ""}`}
                            onClick={() => toggleFilter("sort")}
                            aria-expanded={openFilter === "sort"}
                            aria-controls="sortFilterList"
                        >
                            Сортировка
                            <img src="/icons/bottom-arrow.svg" alt={openFilter === "sort" ? "Close filters" : "Open filters"} />
                        </button>
                        {openFilter === "sort" && (
                            <ul id="sortFilterList" className={styles.filterList}>
                                <li className={styles.filterValue}>По возрастанию</li>
                                <li className={styles.filterValue}>По убыванию</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesFilter;
