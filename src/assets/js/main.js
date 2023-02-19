import accordion from "./modules/accordion.js";



document.addEventListener("DOMContentLoaded", () => {
  // close header banner
  window.addEventListener('click', e => {
    if(e.target.hasAttribute('data-banner-close') || e.target.closest('[data-banner-close]')) {
      document.querySelector('.banner').remove();
    }
  });

  // questions-accordion
  accordion(document.querySelector('.questions-accordion'));
});








