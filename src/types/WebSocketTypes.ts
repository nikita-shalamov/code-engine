import userDataTypes from "../types/userDataTypes";

export default interface WebSocketContextType {
    isAuthenticated: boolean | null;
    setIsAuthenticated: (newValue: boolean) => void;
    alertMessage: { text: string; typeAlert: string } | null;
    setAlertMessage: (newAlert: { text: string; typeAlert: string } | null) => void;
    sendMessage: (message: object) => void;
    response: { Method: string; IsSuccess: boolean; ErrorMessage: string; Value: userDataTypes } | null;
    setToken: (newToken: string) => void;
    connectionStatus: boolean;
    token: string | null;
}
