import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Index from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "", element: <Index /> }
        ],
        errorElement: <NotFound />
    }
]);

export { router }