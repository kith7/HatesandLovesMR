import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.css";
const Header = () => {
  return (
    <>
      <nav>
        <ul className='navbar'>
          <li>
            <NavLink
              to='/'
              className='navbar__link'
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : {}
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/upcoming'
              className='navbar__link'
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : {}
              }
            >
              Upcoming
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/login'
              className='navbar__link'
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : {}
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard'
              className='navbar__link'
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : {}
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1 className={"headerTitle"}>MyFavMov ReactDB</h1>
    </>
  );
};

export default Header;

// upcoming
// most-popular
// login
// dashboard
