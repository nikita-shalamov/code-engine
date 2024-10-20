import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { WebSocketProvider } from "./context/WebSocketContext.tsx";
import { UserDataProvider } from "./context/UserDataContext.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <UserDataProvider>
            <WebSocketProvider>
                <App />
            </WebSocketProvider>
        </UserDataProvider>
    </BrowserRouter>
);
