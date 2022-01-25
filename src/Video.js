import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <div className="video">
      <video
        className="video-player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.youtube.com/watch?v=KQDYuIK3pRE"
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;
