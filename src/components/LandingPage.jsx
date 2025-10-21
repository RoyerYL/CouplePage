import { useEffect, useState } from 'react';
import styles from './LandingPage.module.css';
import EnvelopeWithLetter from './EnvelopeWithLetter';

function LandingPage() {
  const [timePassed, setTimePassed] = useState('');
  const [catMessage, setCatMessage] = useState(''); // mensaje temporal del gato

  const catMessages = [
    "🐾 ¡Miau! Qué lindo verte por aquí.",
    "😺 El amor es como yo: suave y travieso.",
    "🐱 ¡No olvides sonreír hoy!",
    "💖 Nicol y Royer, pareja perfecta.",
    "✨ Te mando ronroneos y buena energía."
  ];

  useEffect(() => {
    const startDate = new Date('2024-07-19');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setTimePassed(`${years} año(s), ${months} mes(es), ${days} día(s)`);
  }, []);

  const handleCatClick = () => {
    // selecciona mensaje aleatorio
    const randomMsg = catMessages[Math.floor(Math.random() * catMessages.length)];
    setCatMessage(randomMsg);

    // oculta el mensaje después de 3 segundos
    setTimeout(() => {
      setCatMessage('');
    }, 3000);
  };

  return (
    <div className={styles.containerLanding}>
      <h2>LA HISTORIA DE NICOL Y ROYER</h2>
      <p>Tiempo transcurrido: {timePassed}</p>
      <EnvelopeWithLetter />

      {/* 🐱 Imagen del gato */}
      <img
        src="/cat.gif"
        alt="Gatito animado"
        className={styles.catGif}
        onClick={handleCatClick}
      />

      {/* 💬 Mensaje temporal del gato */}
      {catMessage && <div className={styles.catMessage}>{catMessage}</div>}
    </div>
  );
}

export default LandingPage;
