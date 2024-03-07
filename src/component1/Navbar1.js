import { NavLink } from "react-router-dom"

 const Navbar1=()=>{
    return(<>
    <div style={{ background: "#bbb", padding: 4 }}>
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            <li>
              <NavLink to="/">{"Home"}</NavLink>
            </li>
            <li>
              <NavLink to="/login1">{"Login"}</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard1">{"DashBoard"}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{"About"}</NavLink>
            </li>
            <li>
              <NavLink to="/product">{"Products"}</NavLink>
            </li>
            <li>
              <NavLink to="/formik">{"formik"}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>)   
}

export default Navbar1