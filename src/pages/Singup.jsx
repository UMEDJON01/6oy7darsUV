import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";

import { GlobalContext } from "../context/useGlobal";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../firebase/firebaseConfin";

function Singup() {
  const { dispatch } = useContext(GlobalContext);

  const handleSingup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        dispatch({ type: "LOG_IN", payload: user });

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorMessage);
      });
  };
  return (
    <div className="min-h-screen grid place-content-center">
      <button
        onClick={handleSingup}
        type="button"
        className="btn btn-secondary"
      >
        <FcGoogle className="h-5 w-5" /> Singup
      </button>
    </div>
  );
}

export default Singup;
