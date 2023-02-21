import accordion from "./modules/accordion.js";



document.addEventListener("DOMContentLoaded", () => {
  // close header banner
  window.addEventListener('click', e => {
    if(e.target.hasAttribute('data-banner-close') || e.target.closest('[data-banner-close]')) {
      document.querySelector('.banner').remove();
    }
  });

  // mobile header
  window.addEventListener('click', e => { 
    if(e.target.classList.contains('menu-open__btn') || e.target.closest('.menu-open__btn')) {
      document.querySelector('.navigation .menu').classList.toggle('active');
      if(document.querySelector('.navigation .menu').classList.contains('active')) {
        setTimeout(() => {
          document.querySelector('.navigation .account').classList.toggle('active');
        }, 200);

        document.body.style.overflowY = 'hidden';
      } else {
        document.querySelector('.navigation .account').classList.toggle('active');

        document.body.style.overflowY = 'auto';
      }
      
    }
  });

  // questions-accordion
  accordion(document.querySelector('.questions-accordion'));
});








