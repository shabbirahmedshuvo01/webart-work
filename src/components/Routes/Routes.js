import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";
import NotFound from "../NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    }
]);

export default router;