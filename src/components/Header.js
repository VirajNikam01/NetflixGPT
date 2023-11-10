import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, []);

  return (
    <div className="absolute z-10 flex justify-between w-screen bg-gradient-to-b from-black items-center">
      <div>
        <img
          className=" w-32 lg:w-52"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      {user && (
        <div className="mx-3 lg:mx-10 flex items-center">
          {/* <img className="w-10 mx-4" src={user?.photoURL} alt="user " /> */}
          <h1 className="text-white px-3 text-sm sm:text-lg ">Hello, <span className="text-teal-600">{user?.displayName}</span></h1>
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
