import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { message } from "antd";
import generateGUID from "./services/generateGUIDService";
import { NoticeType } from "antd/es/message/interface";
import { useUserDataContext } from "./hooks/сontext/useUserDataContext";
import { useWebSocketContext } from "./hooks/сontext/useWebSocketContext";

const App = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { setIsAuthenticated, alertMessage, setAlertMessage, setToken, token, sendMessage, response, connectionStatus } = useWebSocketContext();
    const { setUserData } = useUserDataContext();

    const handleLogin = () => {
        const loginRequest = {
            Controller: "UserService",
            Method: "GetCurrentUser",
            RequestId: token,
        };
        sendMessage(loginRequest);
    };

    useEffect(() => {
        if (response && response.Method === "GetCurrentUser") {
            setIsAuthenticated(response.IsSuccess);
            if (response.IsSuccess) {
                setUserData(response.Value);
            }
        }
    }, [response]);

    useEffect(() => {
        if (connectionStatus && token) {
            handleLogin();
        }
    }, [token, connectionStatus]);

    useEffect(() => {
        let tokenLocal = localStorage.getItem("token");

        if (!tokenLocal) {
            tokenLocal = generateGUID();
            localStorage.setItem("token", tokenLocal);
        }

        if (tokenLocal !== token) {
            setToken(tokenLocal);
        }
    }, [token, setToken]);

    useEffect(() => {
        if (alertMessage) {
            messageApi.open({
                type: alertMessage.typeAlert as NoticeType,
                content: alertMessage.text,
                duration: 3,
            });

            setAlertMessage(null);
        }
    }, [alertMessage]);

    return (
        <>
            {contextHolder}
            <AppRoutes />
        </>
    );
};

export default App;
