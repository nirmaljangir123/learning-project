import "./App.css";
import React, { lazy, Suspense } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Home1 from "./component1/Header1";
import Login1 from "./component1/Login1";
import Dashboard from "./component1/Dashboard";
import AuthUser1 from "./component1/AuthUser1";
import Navbar1 from "./component1/Navbar1";
import ErrorPage from "./component1/Error";
import NestedComponent1 from "./component1/NestedComponent1";
import NestedComponent2 from "./component1/NestedComponent2";

const App1 = () => {
  const { getToken } = AuthUser1();
  if (!getToken) {
    return <Login1 />;
  }
  return (
    <>
      <Navbar1/>
      <div>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/login1" element={<Login1 />} />
        
          <Route path="/dashboard1" element={<Dashboard />} >
            <Route index element={<NestedComponent2/>}/>
          <Route path="nested1" element={<NestedComponent1/>}/>
          <Route path="nested2" element={<NestedComponent2/>}/>

            </Route>
          <Route path="*" element={<ErrorPage/>} />
          {/* <Route path="*" element={<Navigate to="/ dashboard1"/>}/> */}

        </Routes>
      </div>
    </>
  );
};

export default App1;
