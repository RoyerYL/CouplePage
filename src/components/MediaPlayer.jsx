import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./MediaPlayer.module.css";

function MediaPlayer() {
  const [activeTab, setActiveTab] = useState("video");
  const [currentTrack, setCurrentTrack] = useState(0);

  const videoList = [
    {
      title: "Recuerdo principal 🎬",
      url: "https://youtu.be/9Z-NbQvhzKM",
    },
    {
      title: "Otro video 🌅",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  const list = videoList;

  return (
    <div className={styles.mediaPlayerContainer}>
      <h3 className={styles.mediaTitle}>{list[currentTrack].title}</h3>

      <div className={styles.playerWrapper}>
        <ReactPlayer
          url={list[currentTrack].url}
          controls
          width="100%"
          height="240px"
        />
      </div>
    </div>
  );
}

export default MediaPlayer;
