import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10 flex justify-between w-screen items-center">
      <div>
        <img
          className=" w-32 lg:w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div className="mx-3 lg:mx-10 flex items-center">
          <img className="w-10 mx-4" src={user?.photoURL} alt="user " />
          <button
            onClick={handelSignOut}
            className="bg-teal-700 text-white rounded px-2 lg:px-3 py-1 lg:py-2 transition-all duration-300 hover:bg-green-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
