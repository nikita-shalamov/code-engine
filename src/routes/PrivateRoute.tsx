import { Navigate, Outlet } from "react-router-dom";
import { useWebSocketContext } from "../hooks/сontext/useWebSocketContext";

const PrivateRoute = () => {
    const { isAuthenticated } = useWebSocketContext();

    if (isAuthenticated === false) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
