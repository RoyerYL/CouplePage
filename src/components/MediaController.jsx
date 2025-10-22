import React, { useState, useEffect } from "react";
import styles from "./MediaController.module.css";

const MediaController = () => {
    const [showVideo, setShowVideo] = useState(true);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

    const videoUrls = [
        "https://www.youtube.com/watch?v=MdNNHwQwDD0&list=LL&index=2&pp=gAQBiAQB8AUB",
        "https://www.youtube.com/watch?v=wAjHQXrIj9o&list=LL&index=3&pp=gAQBiAQB8AUB",
        "https://www.youtube.com/watch?v=u3JbMHswQqI&list=RDu3JbMHswQqI&start_radio=1&pp=ygUOemFyY29ydCB5IHRvd26gBwE%3D",
        "https://www.youtube.com/watch?v=XXfntpmrQ08&list=RDXXfntpmrQ08&start_radio=1&pp=ygUOemFyY29ydCB5IHRvd26gBwE%3D",
        "https://www.youtube.com/watch?v=d4cbfk2Stmk&list=LL&index=4&pp=gAQBiAQB8AUB",
        "https://www.youtube.com/watch?v=2ilnAsLhi0g&list=RD2ilnAsLhi0g&start_radio=1&pp=ygUKZWwgcmVzY2F0ZaAHAQ%3D%3D",
        "https://www.youtube.com/watch?v=sPW1NAwOapg&list=RDsPW1NAwOapg&start_radio=1&pp=ygUSbWkgbXVuZG8gcHJlZmVyaWRvoAcB",
        "https://www.youtube.com/watch?v=d2hwOYS9sk4&list=RDd2hwOYS9sk4&start_radio=1&pp=ygUMeSBsbGVnbyBlbGxhoAcB",
        "https://www.youtube.com/watch?v=o2tdLOK7-PE&list=LL&index=5&pp=gAQBiAQB8AUB",
        "https://www.youtube.com/watch?v=Z02zptUN8gI&list=LL&index=1&pp=gAQBiAQB8AUB"
    ];

    const audioUrls = [
        "https://open.spotify.com/intl-es/track/5TMLavqGRKNxgzMBrVpC9R?si=b883a1d5f802427b",
        "https://open.spotify.com/intl-es/track/4B6XjmOWI55np7y4MUTXDu?si=c0d5849fc4654474",
        "https://open.spotify.com/intl-es/track/3k3NWokhRRkEPhCzPmV8TW?si=790a2613688b47fc",
        "https://open.spotify.com/intl-es/track/1eukaqiqtfgQgfKnJlIueO?si=81bc9cceff764d1f",
        "https://open.spotify.com/intl-es/track/16dUQ4quIHDe4ZZ0wF1EMN?si=50823cd6958d4719",

        "https://open.spotify.com/intl-es/track/4wlWCHdIUtgtZdsPG1jf3l?si=4499d0f9e5bf4203",
        "https://open.spotify.com/intl-es/track/1YRJFvL4qnlNEkp1iMKYzw?si=92a0d5add6b142fb",
        "https://open.spotify.com/intl-es/track/6f2t9EqTWrXkZfxevl0KgK?si=4f7cbd073cca4720",
        "https://open.spotify.com/intl-es/track/6P9IfeSL7Ogx0j1A8MsXYW?si=b60b9cf060884690",
        "https://open.spotify.com/intl-es/track/5zUAGVBkWnKPXt84ZGa0V4?si=0154ef56d73c4807"
    ];

    // Funciones para cambiar contenido

    const nextMedia = () => {
        if (showVideo) {
            setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length);
        } else {
            setCurrentAudioIndex((prev) => (prev + 1) % audioUrls.length);
        }
    };

    const randomMedia = () => {
        if (showVideo) {
            setCurrentVideoIndex(Math.floor(Math.random() * videoUrls.length));
        } else {
            setCurrentAudioIndex(Math.floor(Math.random() * audioUrls.length));
        }
    };

    const toggleMediaType = () => setShowVideo((prev) => !prev);

    // Convierte YouTube URL a embed
    const getYouTubeEmbed = (url) => {
        return url.replace("watch?v=", "embed/").split("&")[0];
    };

    // Convierte Spotify URL a embed// Convierte cualquier URL de Spotify a embed
    const getSpotifyEmbed = (url) => {
        try {
            // Extraer solo el TRACK_ID
            const parts = url.split("/track/");
            if (parts.length < 2) return "";
            const trackId = parts[1].split("?")[0]; // elimina query params
            return `https://open.spotify.com/embed/track/${trackId}`;
        } catch {
            return "";
        }
    };

    return (
        <div className={styles.container}>
            {showVideo ? (
                <div className={styles.mediaWrapper}>
                    <h3>Nuestras musicas 👉👈 ❤️</h3>
                    <iframe
                        className={styles.player}
                        src={getYouTubeEmbed(videoUrls[currentVideoIndex])}
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className={styles.mediaWrapper}>
                    <h3>Nuestras musicas 👉👈 💖</h3>
                    <iframe
                        className={styles.player}
                        src={getSpotifyEmbed(audioUrls[currentAudioIndex])}
                        title="Música"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowTransparency="true"
                    ></iframe>
                </div>
            )}

            <div className={styles.buttons}>
                <button onClick={nextMedia}>Siguiente</button>
                <button onClick={randomMedia}>Aleatorio</button>
                <button onClick={toggleMediaType}>
                    {showVideo ? "Mostrar Música" : "Mostrar Video"}
                </button>
            </div>
        </div>
    );
};

export default MediaController;
