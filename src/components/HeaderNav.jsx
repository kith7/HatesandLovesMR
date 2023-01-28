import React, { useContext } from "react";
import { UserContext } from "../store/authContext";
import { NavLink } from "react-router-dom";
import { signOutUser } from "../utils/firebase/firebase";
import "./HeaderNav.css";
const Header = () => {
  const { currentUser } = useContext(UserContext);
  const signUserOut = () => {
    signOutUser();
  };
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
          <li>
            {!currentUser ? (
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
            ) : (
              <NavLink
                className='navbar__link'
                onClick={() => {
                  signUserOut();
                }}
                to='/'
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                        background: "#7600dc",
                      }
                    : {}
                }
              >
                Logout
              </NavLink>
            )}
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
