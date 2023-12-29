import React, { useEffect, useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import youtube from "../images/youtubeimage.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utiles/appSlice";
import { YOUTUBE_SEARCH_API } from "../utiles/constants";
import { cacheResults } from "../utiles/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestion, setSuggestion] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      }
      else {
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
    setSuggestion(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    )
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="col-span-1 flex">
        <p className="text-2xl p-2 cursor-pointer">
          <TfiAlignJustify onClick={() => toggleMenuHandler()} />
        </p>
        <img alt="logo" src={youtube} className="w-28" />
      </div>
      <div className="col-span-10 flex flex-col">
        <div>
          <input
            type="text"
            className="border-2 border-gray-300 py-1 px-5 w-1/2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-2 border-gray-300 py-2 px-5 rounded-r-full">
            <IoSearchOutline />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed mt-9 px-3 bg-white w-[34rem] rounded-xl border border-gray-200">
            <ul>
              {suggestion.map((search, index) => (
                <li className="hover:bg-slate-100 py-2" key={index}>
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <p className="text-3xl mt-1">
          <FaRegCircleUser />
        </p>
      </div>
    </div>
  );
};

export default Head;
