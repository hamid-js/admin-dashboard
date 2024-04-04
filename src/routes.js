import Home from "./Pages/home/Home";
import UserList from "./Pages/Users/UserList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Product from "./Pages/home/Product/Product";

let routes = [
    { path: "/product/:productID", element: <Product /> },
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList /> },
    { path: "/newuser", element: <NewUser /> },
    { path: "/products", element: <Products /> },
];

export default routes;
