import React from "react";
import logo from "../../assets/spotify-logo.png";
import "./styles.scss";

export default function Login() {
  const onClickHandler = () => {
    const clientID = "8eafbcea99824c128a1d6a06f492e14c";
    const redirectURL = "http://localhost:3000/";
    const apiURI = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${apiURI}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="main-container">
      <img src={logo} alt="Spotify" />
      <button onClick={onClickHandler}>Connect Spotify</button>
    </div>
  );
}
