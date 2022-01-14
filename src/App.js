import "./App.css";
import YouTube from "react-youtube";

import { dummyData } from "./data";
import { useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [videoSpeed, setVideoSpeed] = useState(3);
  const [videoScale, setVideoScale] = useState(1);
  // const videoPlayerRef = useRef(null);

  return (
    <div className="App">
      <h1>REC LOBE TV</h1>
      <input
        onChange={({ target }) => {
          setVideoSpeed(target.value);
        }}
        value={videoSpeed}
        type="range"
        min="0"
        max="7"
      />{" "}
      <input
        onChange={({ target }) => {
          setVideoScale(target.value);
        }}
        value={videoScale}
        type="range"
        min="0"
        max="7"
      />{" "}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "black",
        }}
      >
        <div className="div-with-hole"></div>

        <VideoPlayer
          videoId="G52dUQLxPzg"
          videoSpeed={videoSpeed}
          videoScale={videoScale}
          blendMode={"lighten"}
          videoStyle={{
            transition: "all 5s",
            filter: "blur(10px) brightness(0.1)",
            // filter: 'url("#noise")',
          }}
        />
        <VideoPlayer
          videoId="pvLM8VNba8k"
          videoSpeed={videoSpeed}
          videoScale={videoScale}
          blendMode={"lighten"}
          videoStyle={{
            transition: "all 5s",
            filter: "saturate(4) blur(50px) brightness(0.7)",
          }}
        />
        <VideoPlayer
          videoId="wNWDjhDo2Ak"
          videoSpeed={videoSpeed}
          videoScale={videoScale}
          blendMode={"lighten"}
          videoStyle={{
            transition: "all 5s",
            filter: "saturate(1) blur(40px)",
          }}
        />
        <VideoPlayer
          videoId="X2fhzyIXiiM"
          videoSpeed={videoSpeed}
          videoScale={videoScale}
          blendMode={"lighten"}
          videoStyle={{
            transition: "all 5s",
            filter: "saturate(0) blur(100px)",
          }}
        />
        <VideoPlayer
          videoId="6zoJavBcU5o"
          videoSpeed={videoSpeed}
          videoScale={videoScale}
          blendMode={"lighten"}
          videoStyle={{
            transition: "all 5s",
            filter: "saturate(0) blur(100px)",
          }}
        />
      </div>
    </div>
  );
}

export default App;
