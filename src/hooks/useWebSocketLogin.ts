import { useEffect, useState } from "react";
import userDataTypes from "../types/userDataTypes";
import handleLoginTypes from "../types/handleLoginTypes";
import handleRegisterTypes from "../types/handleRegisterTypes";
import { useWebSocketContext } from "./сontext/useWebSocketContext";

interface resultProps {
    IsSuccess: boolean;
    ErrorMessage: string;
    Value: null | userDataTypes;
}

export const useWebSocketLogin = (options: { method: string }) => {
    const { sendMessage, response } = useWebSocketContext();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<resultProps | null>(null);

    useEffect(() => {
        if (response && response.Method === options.method) {
            setResult(response);
            setLoading(false);
        }
    }, [response]);

    const handleRequest = async (data: handleLoginTypes | handleRegisterTypes) => {
        setLoading(true);
        
        try {
            const loginRequest = {
                Controller: "UserService",
                Method: options.method,
                Value: JSON.stringify(data),
            };
            
            await new Promise(resolve => setTimeout(resolve, 100));
            
            sendMessage(loginRequest);
            
        } catch (error) {
            console.error("Ошибка при отправке запроса. Повторите еще раз.", error);
            setResult({
                IsSuccess: false,
                ErrorMessage: "Ошибка при отправке запроса. Повторите еще раз.",
                Value: null,
            });
        } finally {
            setLoading(false);
        }
    };

    return { handleRequest, loading, result, setResult };
};

