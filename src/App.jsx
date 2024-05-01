import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobal";

import Mainlayout from "./layouts/Mainlayout";

import ProtectedRoutes from "./components/ProtectedRoutes";

import Home from "./pages/Home";

import About from "./pages/About";

import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfin";

//actions
import { action as SignupActions } from "./pages/Singup";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <Mainlayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <Singup />,
      action: SignupActions,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
