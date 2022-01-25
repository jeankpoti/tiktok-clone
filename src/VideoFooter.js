import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = () => {
  return (
    <div className="video-footer">
      <div className="video-footer-text">
        <h3>@jk</h3>
        <p>This is description</p>
        <MusicNoteIcon />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>Sticker</h1>
            </>
          )}
        </Ticker>
      </div>
      <img
        className="video-footer-record"
        src="https://static.thenounproject.com/png/934821-200.png"
      ></img>
    </div>
  );
};

export default VideoFooter;
