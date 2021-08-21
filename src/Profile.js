import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <nav className=" h-screen min-w-max bg-gray-200">
      <div className="h-16 w-full bg-indigo-500  flex flex-row-reverse px-2">
        <Link  to="/signin"className=" text-2xlfont-sans font-semibold text-white rounded-lg bg-yellow-300 inline-block px-5 py-3 ml-4">
          SignIn
        </Link>
        <Link  to="/signup"className=" text-2xlfont-sans font-semibold text-white rounded-lg bg-red-300 inline-block px-5 py-3  ">
          SignUp
        </Link>
      </div>
      <div >
          <h1 className="text-4xl font-bold text-pink-400 mt-8 font-sans">Steps to create our pages !</h1>
        <ul>
            <li className="text-2xl font-mono font-semibold mt-4 text-indigo-700">Click on SingUp Button </li>
            <li className="text-2xl font-mono font-semibold mt-4 text-indigo-700">if u singup goto signIn Button</li>
        </ul>
      </div>
    
    </nav>
  );
};

export default Profile;
