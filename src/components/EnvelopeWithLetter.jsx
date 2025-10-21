import { useEffect, useState } from 'react';
import styles from './EnvelopeWithLetter.module.css';

function EnvelopeWithLetter({
  messages = [
    "💌 ¡Eres mi persona favorita!",
    "🌟 Hoy es un gran día para sonreír.",
    "💫 Cree en ti, siempre.",
    "🍀 La suerte te acompaña.",
    "🌸 Gracias por existir en mi vida.",
    "🌟 Espero que te diviertas.",
    "🌟 Haces mis dias mas felices",
    "🌟 ¡Que tengas un buen día!",
    "❤ TE AMO",
    "❤ RYN",
    "Iluminas mis días",
    "Quede arepatiesa",
    "Sera?",
    "Hazlo por copo :D",
    "Eso tilín"

  ]
}) {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  // Función para elegir mensaje aleatorio
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const handleClick = () => {
    if (!opened) {
      // Si se abre, elige un nuevo mensaje aleatorio
      setCurrentMessage(getRandomMessage());
    }
    setOpened(prev => !prev);
  };

  // Mostrar carta al abrir
  useEffect(() => {
    if (opened) setShowLetter(true);
  }, [opened]);

  // Ocultar carta al cerrar
  const handleLetterAnimationEnd = () => {
    if (!opened) setShowLetter(false);
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
        >
          <p>{currentMessage}</p>
        </div>
      )}
    </div>
  );
}

export default EnvelopeWithLetter;
