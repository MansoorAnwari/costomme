import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Index from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "", element: <Index /> }
        ]
    }
]);

export { router }