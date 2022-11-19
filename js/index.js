'use strict';

const documentReady = () => {
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 FELIZ CUMPLE PRECIOSA 💞');
  };

  const evitarKCRompanMyBobo = () => {
    location.href = 'https://youtu.be/ooCnP_s0K6s';
  };


  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('click', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);