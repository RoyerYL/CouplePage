import styles from './RotatingEnvelope.module.css';

function RotatingEnvelope() {
  return (
    <div className={styles.envelopeContainer}>
      <div className={styles.envelope}>
        <svg
          className={styles.front}
          viewBox="0 0 100 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="60" fill="#f2f2f2" stroke="#999" />
          <polyline points="0,0 50,30 100,0" fill="none" stroke="#999" />
        </svg>

        <svg
          className={styles.back}
          viewBox="0 0 100 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="60" fill="#e0e0e0" stroke="#666" />
          <polygon points="0,0 50,30 100,0 100,60 0,60" fill="#ccc" />
        </svg>
      </div>
    </div>
  );
}

export default RotatingEnvelope;
