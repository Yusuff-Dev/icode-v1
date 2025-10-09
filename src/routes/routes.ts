import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App
    },

    {
        path: '*',
        Component: NotFound,
    }
])