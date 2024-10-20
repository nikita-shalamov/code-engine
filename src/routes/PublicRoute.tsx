import { Navigate, Outlet } from "react-router-dom";
import { useWebSocketContext } from "../hooks/сontext/useWebSocketContext";

const PublicRoute = () => {
    const { isAuthenticated } = useWebSocketContext();

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PublicRoute;
