import React, { useState } from 'react';
import styles from './PhraseClicker.module.css';

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

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const id = Date.now();

    setTexts((prev) => [...prev, { id, phrase, x, y }]);

    // Eliminar la frase después de 2 segundos
    setTimeout(() => {
      setTexts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {texts.map(({ id, phrase, x, y }) => (
        <span
          key={id}
          className={styles.phrase}
          style={{ left: x, top: y }}
        >
          {phrase}
        </span>
      ))}
      <p className={styles.instruction}>Haz clic en cualquier parte</p>
    </div>
  );
};

export default PhraseClicker;
