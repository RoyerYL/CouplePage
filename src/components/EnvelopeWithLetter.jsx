import { useEffect, useState } from 'react';
import styles from './EnvelopeWithLetter.module.css';

function EnvelopeWithLetter({ message = "¡Este es tu mensaje secreto! 💌" }) {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  // Aparecer: cuando `opened` se vuelve true
  useEffect(() => {
    if (opened) setShowLetter(true);
  }, [opened]);

  // Animación de salida: cuando termina, oculta la carta
  const handleLetterAnimationEnd = () => {
    if (!opened) setShowLetter(false);
  };

  const handleClick = () => {
    setOpened(prev => !prev);
  };

  return (
    <div className={styles.container} onClick={handleClick}>

      <div className={`${styles.envelope} ${opened ? styles.open : ''}`}>
        <div className={styles.flap}></div>
        <div className={styles.flapborder}></div>
        <div className={styles.base}></div>
      </div>

      {showLetter && (
        <div
          className={`${styles.letter} ${opened ? styles.fadeIn : styles.fadeOut}`}
          onAnimationEnd={handleLetterAnimationEnd}
          onClick={handleClick}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default EnvelopeWithLetter;
