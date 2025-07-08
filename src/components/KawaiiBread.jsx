import React from 'react';

const KawaiiBread = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Contorno exterior del pan */}
      {/* <path
        d="M50 160 Q30 80 70 60 Q90 40 100 40 Q110 40 130 60 Q170 80 150 160 Z"
        fill="#6d4222"
      /> */}

      {/* Interior del pan */}
      <path
        d="M50 150 Q50 0 50 100 Q0 0 100 50 Q190 0 150 90 Q150 0 150 150    Z"
        fill="#ffe3a3"
      />

      {/* Ojo izquierdo */}
      <circle cx="85" cy="105" r="5" fill="#000" />
      <circle cx="86.5" cy="106.5" r="1.5" fill="#fce4ec" />

      {/* Ojo derecho */}
      <circle cx="115" cy="105" r="5" fill="#000" />
      <circle cx="116.5" cy="106.5" r="1.5" fill="#fce4ec" />

      {/* Boca sonriente */}
      <path
        d="M90 112 Q100 120 110 112"
        stroke="#000"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default KawaiiBread;
