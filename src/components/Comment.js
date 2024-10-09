import React from "react";
import { USER_ICON } from "../utils/constant";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg border border-l-black my-2">
      <img src={USER_ICON} alt="user-icon" className="h-10" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
