import React from "react";
import { MENU_ICON, USER_ICON, YOUTUBE_ICON } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          alt="menu"
          src={MENU_ICON}
          className="h-10 cursor-pointer"
          onClick={handleToggleMenu}
        />
        <a href="/">
          <img alt="youtube-logo" src={YOUTUBE_ICON} className="h-10 mx-2" />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-4 py-2 bg-gray-100 rounded-r-full ">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img alt="user-icon" src={USER_ICON} className="h-10" />
      </div>
    </div>
  );
};

export default Head;
