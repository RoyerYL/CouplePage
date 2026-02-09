import { useEffect, useState } from 'react';
import styles from './LandingPage.module.css';
import EnvelopeWithLetter from './EnvelopeWithLetter';
import MediaController from './MediaController';
import FallingHearts from './FallingHearts'; // Importa el nuevo componente
import LoveCounter from './LoveCounter'; // Importa el nuevo contador

function LandingPage() {
  const [timePassed, setTimePassed] = useState('');
  const [floatingMessages, setFloatingMessages] = useState([]);
  const [catGif, setCatGif] = useState('/cat1.gif');
  const catGifs = ['/cat.gif', '/cat2.gif', '/cat3.gif', '/cat4.gif'];

  // Elegir gif aleatorio al iniciar
  useEffect(() => {
    setCatGif(catGifs[Math.floor(Math.random() * catGifs.length)]);
  }, []);
  
  const catMessages = [
    "🐾 ¡Miau! Qué lindo verte por aquí.",
    "😺 El amor es como yo: suave y travieso.",
    "🐱 ¡No olvides sonreír hoy!",
    "💖 Nicol y Royer, pareja perfecta.",
    "✨ Te mando ronroneos y buena energía.",
    "🐾 ¡Miau! ¿Ya me diste mis caricias del día?",
    "😺 No soy un gato común, soy el guardián del amor.",
    "🐱 ¿Otra vez trabajando? Ven, dame atención humana.",
    "💤 Si duermo 18 horas, ¿cómo esperas que te responda rápido?",
    "🧶 El hilo rojo del destino me dice que estás pensando en alguien especial...",
    "🍣 Me gustan los mimos tanto como el atún.",
    "🐾 Si estás triste, ven... tengo ronroneos terapéuticos.",
    "😼 Nadie manda aquí, excepto yo... y tal vez Nicol.",
    "🐈 Miau significa 'te quiero', aunque a veces también 'tengo hambre'.",
    "🎶 Si fuera una canción, tendría muchos maullidos y corazones.",
    "🌙 No soy nocturno, solo me gusta pensar en ustedes cuando todo está en silencio.",
    "💞 Nicol y Royer: su amor tiene más vidas que yo.",
    "🐾 Yo vi todo desde el sillón... ¡y sí, se aman de verdad!",
    "💌 Cada mirada entre ustedes tiene más brillo que mis ojos al ver comida.",
    "😻 Si el amor fuera una siesta, ustedes serían mi lugar favorito para dormir.",
    "💫 Cuando se abrazan, hasta mis bigotes se erizan.",
    "💖 Ustedes dos son el ronroneo del corazón.",
    "🌹 Nicol, Royer... ¿pueden dejar de ser tan lindos? Me distraen.",
    "🐾 El tiempo pasa, pero su amor sigue jugando como yo con una pelota.",
    "🕊️ Si existiera una caja del amor perfecto, ustedes ya estarían dentro (y yo también).",
    "🌸 Ustedes me enseñaron que el amor se cuida, como se cuida a un gato feliz."
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

  const handleCatClick = (e) => {
    const randomMsg = catMessages[Math.floor(Math.random() * catMessages.length)];
    const screenWidth = window.innerWidth;
    const textLength = randomMsg.length;

    // estimar ancho del texto (depende del tamaño de pantalla)
    let textWidth = textLength * 8;
    if (screenWidth < 600) textWidth = textLength * 6; // más compacto en móvil

    let x = e.clientX - textWidth / 2 - 20;
    const y = e.clientY - 40 - Math.random() * 60;

    // asegurar que no se salga del borde
    x = Math.max(10, Math.min(screenWidth - textWidth - 10, x));

    const newMessage = {
      id: Date.now(),
      text: randomMsg,
      x,
      y,
      isLong: textLength > 60 || screenWidth < 500 // mensaje largo o pantalla chica
    };

    setFloatingMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      setFloatingMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
    }, 4000);
  };

  return (
    <div className={styles.containerLanding}>
      {/* Componente de corazones cayendo */}
      <FallingHearts initialCount={25} initialSpeed={4} />
      
      <h2>LA HISTORIA DE NICOL Y ROYER</h2>
      <p>Tiempo transcurrido: {timePassed}</p>
      
      {/* Nuevo contador de amor con segundos */}
      <LoveCounter />
      
      <EnvelopeWithLetter />
      <MediaController />

      {/* 🐱 Contenedor del gato */}
      <div className={styles.catWrapper}>
        <img
          src={catGif}
          alt="Gatito animado"
          className={styles.catGif}
          onClick={handleCatClick}
        />
      </div>

      {floatingMessages.map(msg => (
        <div
          key={msg.id}
          className={`${styles.floatingMessage} ${msg.isLong ? styles.longMessage : ''}`}
          style={{
            left: msg.isLong ? '50%' : msg.x,
            top: msg.y,
            transform: msg.isLong ? 'translateX(-50%)' : 'none'
          }}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default LandingPage;