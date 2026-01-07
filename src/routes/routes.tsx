import { createBrowserRouter } from "react-router-dom";
import { CART, CHECKOUT, HOME, PRODUCT_DETAIL, SUCCESS } from "./paths";
import App from "../App";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProductPage from "../pages/ProductPage";
import SuccessPage from "../pages/SuccessPage";
import NotFoundPage from "../pages/NotFoundPage";



export const router = createBrowserRouter([
    {
        path: HOME,
        element: <App/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: CART,
                element: <CartPage/>
            },
            {
                path:CHECKOUT,
                element:<CheckoutPage/>
            },
            {
                path: PRODUCT_DETAIL,
                element: <ProductPage/>
            },
            {
                path: SUCCESS,
                element: <SuccessPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>,
}
        ]
    }
])