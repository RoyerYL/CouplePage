import React, { useState } from 'react';
import styles from './PhraseClicker.module.css';
import HeartBeat from './HeartBeat';

const phrases = [
  "¡Sigue adelante!",
  "¡Lo estás haciendo genial!",
  "React es poderoso 💡",
  "¡No te rindas!",
  "¡Sorpresa!",
  "Click mágico ✨"
];

const PhraseClicker = () => {
  const [texts, setTexts] = useState([]);
  const [explosions, setExplosions] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const id = Date.now();

    // Añadir frase
    setTexts((prev) => [...prev, { id, phrase, x, y }]);

    // Añadir efecto de fuegos artificiales
    setExplosions((prev) => [...prev, { id, x, y }]);

    // Remover ambos después de 2 segundos
    setTimeout(() => {
      setTexts((prev) => prev.filter((t) => t.id !== id));
      setExplosions((prev) => prev.filter((e) => e.id !== id));
    }, 3000);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {texts.map(({ id, phrase, x, y }) => (
        <span
          key={`text-${id}`}
          className={styles.phrase}
          style={{ left: x, top: y }}
        >
          {phrase}
        </span>
      ))}

      {explosions.map(({ id, x, y }) => (
        <div
          key={`explosion-${id}`}
          className={styles.explosion}
          style={{ left: x-50, top: y-50 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.particle}><HeartBeat /></span>
          ))}
        </div>
      ))}

    </div>
  );
};

export default PhraseClicker;
