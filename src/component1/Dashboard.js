import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

return <div><h1>Dashboard use in nested routing </h1>
  <nav>
    <Link to="nested1">Nested 1</Link>
    <Link to="nested2">Nested 2</Link>
  </nav>
  <Outlet/>
  </div>;
};

export default Dashboard;
