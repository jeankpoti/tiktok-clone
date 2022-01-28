import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="video-footer">
      <div className="video-footer-text">
        <h3>@{channel}</h3>
        <p>{description}</p>

        <div className="video-footer-ticker">
          <MusicNoteIcon className="video-footer-icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video-footer-record"
        src="https://static.thenounproject.com/png/934821-200.png"
      ></img>
    </div>
  );
};

export default VideoFooter;
