import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";

import { auth } from "../firebase/firebaseConfin";

import NavLinks from "./NavLinks";

import { BsSun } from "react-icons/bs";

import { LuMoonStar } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";

import { createContext } from "react";
import { GlobalContext } from "../context/useGlobal";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themFormLocalStorage() {
  return localStorage.getItem(`theme`) || themes.winter;
}
function Navbar1() {
  const { dispatch, user } = useContext(GlobalContext);
  const [currentTheme, setCurrentTheme] = useState(themFormLocalStorage());

  const handleMode = () => {
    setCurrentTheme((prev) => {
      return prev == themes.winter ? themes.dracula : themes.winter;
    });

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);
  };
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
    <div className="  bg-green-200 py-4 mb-10">
      <div
        className="navbar 
 align-content  "
      >
        <div className="navbar-start  ">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <div className="dropdown lg:hidden btn-secondary">
            <div tabIndex={0} role="button" className=" btn m-1">
              MyMarket
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center  hidden  lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex gap-10 items-center">
          <label onClick={handleMode} className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <BsSun className="swap-on fill-current w-6 h-6" />

            {/*moon icon */}

            <LuMoonStar className="swap-off fill-current w-6 h-6" />
          </label>

          {user && <p>{user.displayName}</p>}
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
