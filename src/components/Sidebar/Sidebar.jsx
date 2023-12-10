import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BiLibrary } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useStoreState } from "easy-peasy";
import axios from "axios";
import PlayList from "./PlayList";
import "./styles.scss";

let useClickOutside = (handler) => {
  let clickOutside = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (
        clickOutside.current &&
        !clickOutside.current.contains(event.target)
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return clickOutside;
};

export default function Sidebar() {
  const [searchData, setSearchData] = useState("");
  const [showSearchbar, setShowSearchbar] = useState(false);
  const token = useStoreState((state) => state.initialState.token);

  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
  // const token = 'BQCcMzUGKmYM3NvL_5ZYa5z1-029JQYoeppMZZ32lXavm47SIRwzexcRoN7WM4W3T0IItUjdPvaH4diid0fr_mjhAqlP0H0gUzv-XLU3xTlGwHXPlgBWCi7uhLulKn482wkhVeHi_4XdvlXl2UwzWL2LWGQQA5GEY1lm8NRLsnPzcGZriFoIRUH1lPmC7YrUcPmj7sc1NZcbGovuiUIJ0UnejA9OewjsvCDerb1DAj0i2glcW9livhLsWt-bxD3PA2iyOGooQFKfTKOGntmZ';
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (
      await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
    ).items;
  }

  const testFun = async () => {
    const topTracks = await getTopTracks();
  };

  useEffect(() => {
    testFun();
    // const getPlaylists = async () => {
    //   const data = await axios.get(
    //     "https://api.spotify.com/v1/playlists/3NlmFeTSUbvuhdQnJUd2ul/tracks",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-type": "application/json",
    //       },
    //     }
    //   );
    //   console.log("Data", data, token);
    // };
    // getPlaylists();
    // const SPOTIFY_API_BASE = "https://api.spotify.com/v1";
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };
    // const getUserPlaylists = async () => {
    //   try {
    //     const response = await axios.get(`${SPOTIFY_API_BASE}/me/playlists`, {
    //       headers,
    //     });
    //     const playlists = response.data.items;
    //     console.log(playlists);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getUserPlaylists();
  }, [token]);

  let clickOutside = useClickOutside(() => {
    setShowSearchbar(false);
    setSearchData("");
  });

  return (
    <div className="sidebar">
      <div className="title-container">
        <span className="title">
          <BiLibrary size={25} />
          Your Library
        </span>
        <span className="title-functions">
          <AiOutlinePlus size={25} className="icon" />
          <AiOutlineArrowRight size={25} className="icon" />
        </span>
      </div>
      <div className="highlighters">
        <button>Playlists</button>
        <button>Artists</button>
        <button>Albums</button>
      </div>
      <div className="playlists custom-scrollbar">
        <ul>
          <li>
            <div className="top-li">
              <div className="search">
                {showSearchbar ? (
                  <div className="search-bar" ref={clickOutside}>
                    <GoSearch size={20} className="icon" />
                    <input
                      value={searchData}
                      onChange={(e) => setSearchData(e.target.value)}
                      placeholder="Search in Your Library"
                      type="text"
                      id="search-bar"
                    />
                    {searchData != "" && (
                      <RxCross2
                        size={20}
                        onClick={() => setSearchData("")}
                        className="icon"
                      />
                    )}
                  </div>
                ) : (
                  <span
                    className="search-icon"
                    onClick={() => {
                      setShowSearchbar(!showSearchbar);
                      // let x= document.getElementById("search-bar").focus();
                    }}
                  >
                    <GoSearch size={20} className="icon" />
                  </span>
                )}
              </div>
              <span className="recents-dropdown">
                Recents
                <AiOutlineCaretDown size={20} className="icon" />
              </span>
            </div>
          </li>
          {PlayList.map((value, key) => {
            return (
              <li key={key}>
                <img src={value.img} />
                <div className="playlist-item">
                  <span className="song-name">{value.songName}</span>
                  <span className="song-artist">{value.artist}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
