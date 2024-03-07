import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NestedComponent1 = () => {
  return <div><p>
    Dashboard use in nested routing NestedComponent1</p>
    <nav>
        <NavLink to="nestnest"/>
    </nav>
    <Outlet/>
    </div>;
};

export default NestedComponent1;
