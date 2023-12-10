import React, { useState } from "react";
import { Slider } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import { CgInpicture, CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import {
  BsFilePlay,
  BsFillVolumeDownFill,
  BsPlayCircleFill,
  BsRepeat,
  BsShuffle,
} from "react-icons/bs";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { HiQueueList } from "react-icons/hi2";
import { FcMultipleDevices } from "react-icons/fc";
import image from "../../assets/download.jpg";
import "./styles.scss";

export default function Playbar() {
  const [startTime, setStartTime] = useState("01:40");
  const [endTime, setEndTime] = useState("03:40");

  return (
    <div className="playbar-container">
      <div className="song-detail">
        <img src={image} />
        <div className="playlist-item">
          <span className="song-name">Alag Aasmaan</span>
          <span className="song-artist">Anuv Jain</span>
        </div>
        <div className="like-and-picture">
          <AiOutlineHeart size={25} className="icon" />
          <CgInpicture size={25} className="icon" />
        </div>
      </div>
      <div className="playbar">
        <div className="track-funtions">
          <BsShuffle size={25} className="icon" />
          <CgPlayTrackPrev size={30} className="icon" />
          <BsPlayCircleFill size={35} color="white" className="icon" />
          <CgPlayTrackNext size={30} className="icon" />
          <BsRepeat size={25} className="icon" />
        </div>
        <div className="tracker">
          {startTime}
          <Slider defaultValue={30} aria-label="slider" className="tracker" />
          {endTime}
        </div>
      </div>
      <div className="other-funtions">
        <Slider
          defaultValue={90}
          aria-label="Volume"
          size="small"
          className="volume-slider"
        />``
        <BsFillVolumeDownFill size={20} className="icon" />
        <FcMultipleDevices size={20} className="icon" />
        <HiQueueList size={20} className="icon" />
        <PiMicrophoneStageBold size={20} className="icon" />
        <BsFilePlay size={20} className="icon" />
      </div>
    </div>
  );
}
