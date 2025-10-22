import React from "react";
import styles from "./MediaPlayerIframe.module.css";

const MediaPlayerIframe = ({ src, title }) => {
  // Convierte el link de YouTube a embed automáticamente
  const embedUrl = src
    .replace("watch?v=", "embed/")
    .split("&")[0]; // elimina parámetros extra que rompen el iframe

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <iframe
        className={styles.player}
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MediaPlayerIframe;
