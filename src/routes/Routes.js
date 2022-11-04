import Main from "../layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://smart-car-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: 'orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>,

            }
        ]
    }
])