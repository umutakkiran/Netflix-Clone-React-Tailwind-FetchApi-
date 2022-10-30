import React from "react";
import { FaDoorOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";


const Navi = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const smallUserLogo = `${user?.email}`;
  const [searchresult, setSearchresult] = useState();
  
  
  const result = smallUserLogo.substring(0, 1);
  const username = smallUserLogo.split('@');

  const HandleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  window.addEventListener('resize', function(event) {
  
}, true);

  const HandleSearchResult = () => {
    var searchbar = document.getElementById('Searchbar');
    setSearchresult(searchbar.value);
  };

  return (
    <div className="flex items-center justify-between p-4 w-full z-50 absolute top-0 left-0">
      <Link to="/">
        <a>
        <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-4xl font-solid cursor-pointer px-2 py-2">
            CORN
          </h1>
        </a>
      </Link>
      <div className="flex mr-10 md:ml-40">
        <input
          onChange={HandleSearchResult}
          id="Searchbar"
          className="rounded w-40 md:w-72 h-7 lg:w-96  bg-gray-600 text-white transition-all ease-out duration-300"
          type={"text"}
          placeholder="Search Movies or Tv Shows"
        ></input>
        <a href={`/Search/${searchresult}`} className="text-white">
          <FiSearch className="w-6 h-6 sm:ml-2 hover:text-red-600  mr-5"></FiSearch>
        </a>
      </div>

      {user?.email ? (
        <div>
          <div className="hidden  min-[1500px]:block mr-20 xxl:mr-32">
            <div className="flex items-center justify-between p-4">
              <p className="text-white px-6 py-2">Wellcome! {username[0]}</p>

              <Link to={"/Account"}>
                <button className="relative bg-red-600 text-white px-5 py-2 rounded group">
                  <span className="absolute left-0 top-0 w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-red-800 rounded"></span>
                  <span className="relative">My Account</span>
                </button>
              </Link>
              <Link to={"/"}>
                <button onClick={HandleLogout} className="text-white ml-5">
                  <span>
                    <FaDoorOpen></FaDoorOpen>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="block min-[1500px]:hidden absolute top-8 right-3">
            <Link to={"/Account"}>
              <button className="relative bg-red-600 text-white px-5 py-2 rounded-full group">
                <span className="absolute left-0 top-0 w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-red-800 rounded-full"></span>
                <span className="relative">{result}</span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4">
          <Link to="/Login">
            <button className="text-white px-6 py-2">Sign In</button>
          </Link>
          <Link to="/Signup">
            <button className="relative bg-red-600 text-white px-5 py-2 rounded group">
              <span className="absolute left-0 top-0 w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-red-800 rounded"></span>
              <span className="relative">Sign Up</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navi;
