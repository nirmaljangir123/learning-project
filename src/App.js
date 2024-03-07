import "./App.css";
import React, { lazy, Suspense } from "react";
import {
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
// import Header from "./component/Header";
import Navbar from "./component/Navbar";
import OrderSummary from "./component/OrderSummary";

const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Product = lazy(() => import("./component/Product"));
const FormaikValidation = lazy(() => import("./component/FormikYup"));
const NoMatch = lazy(() => import("./component/NoMatch"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/formik" element={<FormaikValidation />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
