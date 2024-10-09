import React, { useEffect, useState } from "react";
import {
  MENU_ICON,
  USER_ICON,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 py-2 px-5 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-4 py-2 bg-gray-100 rounded-r-full ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[32rem] rounded-xl shadow-lg py-3 px-2 border border-gray-200">
            {suggestions.map((s, index) => (
              <ul key={index}>
                <li className="py-2 px-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img alt="user-icon" src={USER_ICON} className="h-10" />
      </div>
    </div>
  );
};

export default Head;
