import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const signInOutHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const btnInOut = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message == null) {
      email.current.value = null;
      password.current.value = null;
    }
  };

  return (
    <div className="">
      <Header />
      <div className="relative">
        <img
          className="brightness-50 h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-screen md:w-96 h-screen md:h-fit py-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5  text-white bg-black  md:bg-opacity-70 p-10 rounded-xl"
        >
          <h1 className="font-semibold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className="px-2 py-3 outline-none bg-gray-700 bg-opacity-50 rounded "
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="px-2 py-3 outline-none bg-gray-700 bg-opacity-50 rounded "
            ref={email}
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="px-2 py-3 outline-none bg-gray-700 bg-opacity-50 rounded "
            type="password"
            placeholder="Password"
          />

          <p className="text-red-500">{errorMessage}</p>

          <button
            onClick={btnInOut}
            className="mt-5 text-lg py-2 px-4 bg-red-700 rounded"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-base cursor-pointer w-fit"
            onClick={signInOutHandler}
          >
            <span className="text-gray-400">New to Netflix?</span> Sign up now.
          </p>
          <p className="text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
