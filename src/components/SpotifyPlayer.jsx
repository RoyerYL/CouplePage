import React from "react";
import styles from "./SpotifyPlayer.module.css";

const SpotifyPlayer = ({ uri, title }) => {
  // uri puede ser link de canción, playlist o álbum
  // ejemplo: https://open.spotify.com/track/7GhIk7Il098yCjg4BQjzvb?si=abc123
  // convertimos a embed
  const embedUrl = uri
    .replace("open.spotify.com/", "open.spotify.com/embed/")
    .split("?")[0];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <iframe
        src={embedUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowTransparency="true"
        title={title}
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
