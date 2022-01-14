import "./App.css";
import YouTube from "react-youtube";

import { dummyData } from "./data";
import { useEffect, useRef, useState } from "react";

const VIDEO_OPTIONS = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    mute: 1,
    controls: 0, // Show pause/play buttons in player
    showinfo: 0, // Hide the video title
    modestbranding: 1, // Hide the Youtube Logo
    enablejsapi: 1,
    rel: 0,
    loop: 0, // Run the video in a loop
    fs: 0, // Hide the full screen button
    cc_load_policy: 0, // Hide closed captions
    iv_load_policy: 3, // Hide the Video Annotations
    autohide: 1, // Hide video controls when playing
  },
};

function VideoPlayer(props) {
  const { videoId, videoSpeed, videoScale, blendMode, videoStyle } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    const options = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    const val = options[videoSpeed];
    if (videoPlayerRef.current) {
      videoPlayerRef.current.setPlaybackRate(val);
    }
  }, [videoSpeed]);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          mixBlendMode: blendMode || "normal",
          ...videoStyle,
        }}
      >
        {/* <div className="div-with-hole"></div> */}

        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: isPlaying ? 0 : 1,
            transition: "all 4s",
            background: "black",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `scale(${videoScale})`,
            transition: "all 0.2s",
          }}
        >
          <YouTube
            videoId={videoId} // defaults -> null
            // id={string} // defaults -> null
            // className={string} // defaults -> null
            containerClassName={"videoWrapper"} // defaults -> ''
            // title={string} // defaults -> null
            opts={VIDEO_OPTIONS} // defaults -> {}
            onReady={({ target }) => {
              console.log(target);
              videoPlayerRef.current = target;
              const duration = target.getDuration();
              console.log("DURATION: ", duration);

              // target.setPlaybackRate(2);
            }} // defaults -> noop
            onPlay={() => {
              setIsPlaying(true);
              // const vid = videoPlayerRef.current;
              // setTimeout(() => {
              //   setIsPlaying(false);
              //   vid.stopVideo();
              // }, (vid.getDuration() - 5) * 1000);
            }} // defaults -> noop
            // onPause={func} // defaults -> noop
            onEnd={() => setIsPlaying(false)} // defaults -> noop
            // onError={func} // defaults -> noop
            // onStateChange={func} // defaults -> noop
            // onPlaybackRateChange={func} // defaults -> noop
            // onPlaybackQualityChange={func} // defaults -> noop
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
