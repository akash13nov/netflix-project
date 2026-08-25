import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/6ef286cc-b89b-4da3-bab7-62971d87dbd0/web/IN-en-20260817-TRIFECTA-perspective_dce6e6bc-2bd3-45f2-9086-211bf8b6e8c8_large.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black/30">
        <div className="relative z-10">
          <Header />
          <div className="w-md m-auto mt-10 p-13 bg-black/70 rounded">
            <h1 className="text-3xl font-bold text-white">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <f orm className="mt-4.5 flex flex-col gap-3.5 w-full">
              // if you build large form application you need library i.e.
              https://formik.org/
              {!isSignInForm && (
                <input
                  className="bg-gray-700 p-3 rounded text-white"
                  type="text"
                  placeholder="Name"
                />
              )}
              <input
                className="bg-gray-700 p-3 rounded text-white"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-gray-700 p-3 rounded text-white"
                type="password"
                placeholder="Password"
              />
              {!isSignInForm && (
                <input
                  className="bg-gray-700 p-3 rounded text-white"
                  type="password"
                  placeholder="Confirm Password"
                />
              )}
              <button
                className="text-white p-3 mt-3.5 rounded text-xl bg-red-600 cursor-pointer"
                type="submit"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-gray-400">
                {isSignInForm ? "New to Netflix?" : "Already Register"}
                <span
                  onClick={toggleSignUpForm}
                  className="text-white underline cursor-pointer pl-1 "
                >
                  {isSignInForm ? "Sign up now" : "Sign in now"}
                </span>
              </p>
            </f>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
