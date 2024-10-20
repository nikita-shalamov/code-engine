import { createContext, useEffect, useRef, useState } from "react";
import userDataTypes from "../types/userDataTypes";
import WebSocketContextType from "../types/WebSocketTypes";

export const WebSocketContext = createContext<WebSocketContextType | null>(null);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [alertMessage, setAlertMessage] = useState<{ text: string; typeAlert: string } | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<boolean>(false);
    const [response, setResponse] = useState<{ Method: string; IsSuccess: boolean; ErrorMessage: string; Value: userDataTypes } | null>(null);
    const socketRef = useRef<WebSocket | null>(null);
    const [token, setToken] = useState<null | string>(null);

    useEffect(() => {
        if (token) {
            socketRef.current = new WebSocket(`${import.meta.env.VITE_SERVER}/websocket?token=${token}`);

            socketRef.current.onopen = () => {
                setConnectionStatus(true);
            };

            socketRef.current.onmessage = (event) => {
                setResponse(JSON.parse(event.data));
            };

            socketRef.current.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            socketRef.current.onclose = (event) => {
                console.log("WebSocket closed:", event);
                setConnectionStatus(false);
            };

            return () => {
                if (socketRef.current) {
                    socketRef.current.close();
                }
            };
        }
    }, [token]);

    const sendMessage = (message: object) => {
        if (socketRef.current && connectionStatus) {
            socketRef.current.send(JSON.stringify(message));
        } else {
            console.error("WebSocket is not connected");
        }
    };

    return (
        <WebSocketContext.Provider value={{ isAuthenticated, setIsAuthenticated, alertMessage, setAlertMessage, sendMessage, response, setToken, token, connectionStatus }}>
            {children}
        </WebSocketContext.Provider>
    );
};
