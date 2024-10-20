import { createContext, useState } from "react";
import userDataTypes from "../types/userDataTypes";

interface UserDataContextType {
    userData: userDataTypes | null;
    setUserData: (newData: userDataTypes) => void;
}

export const UserDataContext = createContext<UserDataContextType | null>(null);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<userDataTypes | null>(null);

    return <UserDataContext.Provider value={{ userData, setUserData }}>{children}</UserDataContext.Provider>;
};
