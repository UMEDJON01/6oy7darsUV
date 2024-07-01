import { Form, Link, useActionData } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSingup } from "../hooks/useSingup";
import Forminput from "../components/Forminput";
import { useEffect } from "react";
import "../hooks/useLogin";
import { useLogin } from "../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const { signUpWithGoogle } = useSingup();
  const { loginWithEmailAndPassword } = useLogin();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      loginWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1350595566/photo/cyber-security-firewall-interface-protection-concept-businesswoman-protecting-herself-from.jpg?s=2048x2048&w=is&k=20&c=CD1OP57YoLC7NEs-L5RCUDOstpFec7Kbgr0PtC1dwUI=')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
        <Form method="post" className="space-y-4">
          <Forminput label="Email" type="email" name="email" />
          <Forminput label="Password" type="password" name="password" />
          <button className="btn btn-primary w-full mt-5">Submit</button>
        </Form>
        <button
          onClick={signUpWithGoogle}
          className="btn btn-secondary w-full flex items-center justify-center mt-4"
        >
          <FcGoogle className="h-5 w-5 mr-2" /> Login with Google
        </button>
        <p className="mt-4 text-center">
          Do not have an account yet?{" "}
          <Link to="/signup" className="link link-primary font-extrabold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
