import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfin";
import { GlobalContext } from "../context/useGlobal";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themeFormLocalStorage() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme in themes ? storedTheme : themes.winter;
}

function Navbar1() {
  const { dispatch, user } = useContext(GlobalContext);
  const [currentTheme, setCurrentTheme] = useState(themeFormLocalStorage());
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === themes.dracula);

  const handleMode = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === themes.winter ? themes.dracula : themes.winter;
      setIsDarkMode(newTheme === themes.dracula);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-base-300 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
          <Link to="/" className="font-extrabold text-lg">
            my website
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex items-center">
          <label className="swap swap-rotate mr-9">
            <input type="checkbox" checked={isDarkMode} onChange={handleMode} />
            <FaSun className="swap-on fill-current w-5 h-5" />
            <FaMoon className="swap-off fill-current w-5 h-5" />
          </label>
          {user && <p className="font-bold mr-4">{user.displayName}</p>}

          <div className="dropdown ml-5">
            <div tabIndex={0} role="button">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} alt="User avatar" />
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-warning ml-5" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
