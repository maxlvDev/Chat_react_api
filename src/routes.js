import Auth from "./components/Auth";
import Chat from "./components/Chat";
import { AUTH_ROUTE, CHAT_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: AUTH_ROUTE ,
        Component: Auth 
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE ,
        Component: Chat 
    }
]