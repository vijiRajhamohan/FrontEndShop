/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Userprivateroute } from './PrivateRoute';
import { Adminprivateroute } from './PrivateRoute';
import LandingPage from "../containers/LandingPage";
import Login from "../containers/Login";
import Home from "../containers/Home";
import Products from "../containers/Products";
import ProductsDetails from "../containers/ProductsDetails";
import Register from "../containers/Register";
import About from "../containers/About";
import Category from "../containers/Category";
import Password from "../containers/Password";
import Cart from "../containers/Cart";
import Contact from "../containers/Contact";
import Feed from "../containers/Feed";
import Policy from "../containers/Policy";
import NewPassword from "../containers/NewPassword";
import OrderHistory from "../containers/OrderHistory";
import { UserOrderInfo } from "../containers/UserOrderInfo";
import UpdateProfile from "../containers/UpdateProfile";
import MyProfile from "../containers/MyProfile";
import Admin from "../containers/Admin/Admin";
import ProductsAdmin from "../containers/Admin/ProductsAdmin";
import { Update } from "../containers/Admin/Update";
import AdminProducts from "../containers/Admin/AdminProducts";
import OrdersAdmin from "../containers/Admin/OrdersAdmin";
import UsersAdmin from "../containers/Admin/UsersAdmin";
import { OrderAdminInfo } from "../containers/Admin/OrderAdminInfo";

function routing() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<LandingPage />} exact />
        <Route path={"/landing"} element={<LandingPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/password"} element={<Password />} exact />
        <Route path={"/password/:token"} element={<NewPassword />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/home"} element={<Userprivateroute><Home/></Userprivateroute>} />
        <Route path={"/cart"} element={<Userprivateroute><Cart /></Userprivateroute>} />
        <Route path={"/productsList/:catagory"} element={<Userprivateroute><Products /></Userprivateroute>} />
        <Route path={"/productsLists"} element={<Userprivateroute><Products /></Userprivateroute>} />
        <Route path={"/productsDetails/:id"} element={<Userprivateroute><ProductsDetails /></Userprivateroute>} />
        <Route path={"/about"} element={<Userprivateroute><About /></Userprivateroute>} />
        <Route path={"/category"} element={<Userprivateroute><Category /></Userprivateroute>} />
        <Route path={"/contact"} element={<Userprivateroute><Contact /></Userprivateroute>} />
        <Route path={"/feed"} element={<Userprivateroute><Feed /></Userprivateroute>} />
        <Route path={"/policy"} element={<Userprivateroute><Policy /></Userprivateroute>} />
        <Route path={"/orderhistory"} element={<Userprivateroute><OrderHistory /></Userprivateroute>} />
        <Route path={"/userorderinfo/:id"} element={<Userprivateroute><UserOrderInfo /></Userprivateroute>} />
        <Route path={"/myprofile"} element={<Userprivateroute><MyProfile /></Userprivateroute>} />
        <Route path={"/updateprofile/edit/:id"} element={<Userprivateroute><UpdateProfile /></Userprivateroute>} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/productsadmin"} element={<Adminprivateroute><ProductsAdmin /></Adminprivateroute> } />
        <Route path={"/update/edit/:id"} element={<Adminprivateroute><Update /></Adminprivateroute>} />
        <Route path={"/adminproducts"} element={<Adminprivateroute><AdminProducts /></Adminprivateroute>} />
        <Route path={"/usersadmin"} element={<Adminprivateroute><UsersAdmin /></Adminprivateroute>} />
        <Route path={"/ordersadmin"} element={<Adminprivateroute><OrdersAdmin /></Adminprivateroute>} />
        <Route path={"/orderadmininfo/:id"} element={<Adminprivateroute><OrderAdminInfo /></Adminprivateroute>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default routing;
