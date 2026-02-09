// FallingHearts.jsx
import { useEffect, useState } from 'react';
import styles from './FallingHearts.module.css';

const FallingHearts = ({ initialCount = 30, initialSpeed = 5 }) => {
  const [heartsCount, setHeartsCount] = useState(initialCount);
  const [heartSpeed, setHeartSpeed] = useState(initialSpeed);
  const [hearts, setHearts] = useState([]);

  // Colores disponibles para los corazones
  const heartColors = [
    'rgba(214, 51, 132, 0.7)',   // Rosa fuerte
    'rgba(227, 93, 140, 0.7)',   // Rosa medio
    'rgba(255, 105, 180, 0.7)',  // Hot pink
    'rgba(219, 112, 147, 0.7)',  // Pale violet red
    'rgba(199, 21, 133, 0.7)'    // Medium violet red
  ];

  // Función para crear corazones
  const createHearts = () => {
    const newHearts = [];
    
    for (let i = 0; i < heartsCount; i++) {
      // Posición aleatoria en el eje X
      const leftPos = Math.random() * 100;
      
      // Tamaño aleatorio
      const size = Math.random() * 25 + 15;
      
      // Color aleatorio
      const color = heartColors[Math.floor(Math.random() * heartColors.length)];
      
      // Duración de animación aleatoria
      const duration = Math.random() * 10 + 5;
      const animationDuration = `${duration / heartSpeed}s`;
      
      // Retraso inicial aleatorio
      const delay = Math.random() * 5;
      
      newHearts.push({
        id: i,
        left: leftPos,
        size,
        color,
        animationDuration,
        delay: `${delay}s`,
        // Agregar rotación aleatoria para efecto de caída más natural
        rotation: Math.random() * 360
      });
    }
    
    setHearts(newHearts);
  };

  // Función para agregar más corazones
  const addMoreHearts = () => {
    if (heartsCount < 100) {
      setHeartsCount(prev => prev + 10);
      setHeartSpeed(prev => Math.max(1, prev - 0.5));
    }
  };

  // Función para reducir corazones
  const reduceHearts = () => {
    if (heartsCount > 10) {
      setHeartsCount(prev => prev - 10);
      setHeartSpeed(prev => Math.min(10, prev + 0.5));
    }
  };

  // Efecto para recrear corazones cuando cambia la cantidad o velocidad
  useEffect(() => {
    createHearts();
  }, [heartsCount, heartSpeed]);

  return (
    <>
      {/* Contenedor de corazones cayendo */}
      <div className={styles.heartsContainer}>
        {hearts.map(heart => (
          <div
            key={heart.id}
            className={styles.heart}
            style={{
              left: `${heart.left}vw`,
              fontSize: `${heart.size}px`,
              color: heart.color,
              animationDuration: heart.animationDuration,
              animationDelay: heart.delay,
              transform: `rotate(${heart.rotation}deg)`
            }}
          >
            ❤
          </div>
        ))}
      </div>

      {/* Controles de corazones (opcional, puedes integrarlos en otro componente) */}
      <div className={styles.controls}>
        <button 
          className={styles.controlBtn} 
          onClick={addMoreHearts}
          title="Agregar más corazones"
        >
          <span className={styles.btnIcon}>+</span> Más corazones
        </button>
        <button 
          className={styles.controlBtn} 
          onClick={reduceHearts}
          title="Reducir corazones"
        >
          <span className={styles.btnIcon}>-</span> Menos corazones
        </button>
        <div className={styles.counterInfo}>
          <span className={styles.heartIcon}>❤</span>
          {heartsCount} corazones
        </div>
      </div>
    </>
  );
};

export default FallingHearts;