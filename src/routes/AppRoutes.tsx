import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomeLayout from "../layouts/HomeLayout";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeLayout children={<HomePage />} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
