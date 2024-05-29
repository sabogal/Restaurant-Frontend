import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtherProtectedRoutes from "./OtherRoutes/OtherRoutes";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import { ShoppingcartProvider } from "../context/context";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Dashboard from "../Page/Dashboard";
import Users from "../Page/Users";
import Sucursal from "../Page/Sucursal";
import Cars from "../Page/Cars";
import Ware from "../Page/Ware";
import Coti from "../Page/Coti";
import Sale from "../Page/Sale";
import Ot from "../Page/OT";
import Facture from "../Components/Facture";

export const NavigationRoutes = () => {
  return (
    <>
    <ShoppingcartProvider>
      <Router>
        <Routes>
          <Route element={<OtherProtectedRoutes />}>
            <Route exact path="/Login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/Users" element={<Users />} />
            <Route exact path="/Ware" element={<Ware />} />
            <Route exact path="/Reports" element={<Ot />} />
            <Route exact path="/Facture" element={<Facture />} />
          </Route>
        </Routes>
      </Router>
      </ShoppingcartProvider>
    </>
  );
};
