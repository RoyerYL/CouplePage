// LoveCounter.jsx
import { useEffect, useState } from 'react';
import styles from './LoveCounter.module.css';

const LoveCounter = () => {
  const [timeData, setTimeData] = useState({
    days: '000',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Fecha de inicio del amor (cámbiala según necesites)
    const startDate = new Date('2024-07-19T00:00:00');
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now - startDate; // Diferencia en milisegundos
      
      // Calcular días, horas, minutos y segundos
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeData({
        days: days.toString().padStart(3, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };
    
    // Actualizar el contador cada segundo
    const interval = setInterval(updateCounter, 1000);
    
    // Ejecutar una vez al cargar
    updateCounter();
    
    // Limpiar intervalo al desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loveCounter}>
      <h2 className={styles.counterTitle}>Nuestro amor comenzó hace...</h2>
      <div className={styles.counter}>
        <div className={styles.counterItem}>
          <div className={styles.counterValue}>{timeData.days}</div>
          <div className={styles.counterLabel}>Días</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterValue}>{timeData.hours}</div>
          <div className={styles.counterLabel}>Horas</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterValue}>{timeData.minutes}</div>
          <div className={styles.counterLabel}>Minutos</div>
        </div>
        <div className={styles.counterItem}>
          <div className={styles.counterValue}>{timeData.seconds}</div>
          <div className={styles.counterLabel}>Segundos</div>
        </div>
      </div>
      <p className={styles.loveMessage}>
        Cada segundo a tu lado es un regalo del universo ❤️
      </p>
    </div>
  );
};

export default LoveCounter;