import { useEffect, useState } from 'react';
import styles from './LandingPage.module.css';
import EnvelopeWithLetter from './EnvelopeWithLetter';

function LandingPage() {
  const [timePassed, setTimePassed] = useState('');

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

  return (
    <div className={styles.containerLanding}>
      <h2>Fecha de referencia: 19 de julio de 2024</h2>
      <p>Tiempo transcurrido: {timePassed}</p>
      <EnvelopeWithLetter/>
    </div>
  );
}

export default LandingPage;
