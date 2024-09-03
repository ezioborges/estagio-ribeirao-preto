import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

import "./layout.css";

function Layout() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/";

  return (
    <div>
      {!hideNavBar && <NavBar />}
      <Outlet />
    </div>
  );
}

export default Layout;
