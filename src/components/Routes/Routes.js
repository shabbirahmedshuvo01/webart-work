import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";
import NotFound from "../NotFound/NotFound";
import CartPage from "../CartPage/CartPage";

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
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);

export default router;