import accordion from "./modules/accordion.js";

gsap.registerPlugin(ScrollTrigger);


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


  // animations
  if (window.innerWidth >= 577) { 
    // Main section animations
    gsap.from('.main__title', {
      opacity: 0,
      duration: .8,
      delay: .2,
      scrollTrigger: {
        trigger: '.main__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });
  
    const blocksTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.main .main-blocks',
        start: 'top 80%',
        end: 'top 30%',
      }
    });
    blocksTimeLine.from('.main-blocks', {
      opacity: 0,
      y: 100,
      duration: .4,
    })
    .from('.main .block-1 .block-img__svg svg rect', {
      delay: .2,
      duration: .1,
      opacity: 0,
      stagger: .1
    })
    .from('.main .block-2 .block-img__switcher', {
      duration: .4,
      background: 'rgba(255, 255, 255, 0.12)'
    })
    .from('.main .block-2 .block-img__switcher-button', {
      duration: .4,
      right: 25,
      background: 'rgba(255, 255, 255, 0.12)'
    }, '-=.4')
    .from('.main .block-2 .block-img__switcher-button svg path', {
      duration: .4,
      fill: '#ffffff'
    }, '-=.4')
    .set(document.querySelector('.main .block-3 .block-img__graph'), {
      className: "block-img__graph animate"
    });



    // Metrics section animations
    gsap.from('.metrics__title', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.metrics__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });
    
    const metricsTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.metrics .metrics-wrapper',
        start: 'center 80%',
        end: '20% top'
      }
    });
    metricsTimeLine.from('.metrics .circle svg', {
      width: 0,
      duration: .5,
      delay: .2
    })
    .from('.metrics .metrics-numbers__list-item', {
      duration: .5,
      opacity: 0,
      y: 50,
      stagger: .2
    }, '-=.3')
    .from('.metrics .metrics-numbers__price', {
      duration: .5,
      opacity: 0,
      y: 50,
    }, '-=.3');



    // Stake section animations
    gsap.from('.stake__title', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.stake__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });

    gsap.from('.stake__text', {
      y: 100,
      opacity: 0,
      duration: .3,
      scrollTrigger: {
        trigger: '.stake__text',
        start: 'top 80%',
        end: 'top 30%',
      }
    });

    const stakeTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.stake .stake-statistics',
        start: '20% 80%',
        end: '20% top',
        
      }
    });
    stakeTimeLine.from('.stake-statistics__text', {
      delay: .2,
      duration: .3,
      x: -100,
      opacity: 0
    })
    .from('.stake-list__item', {
      duration: .3,
      opacity: 0,
      x: 100,
      stagger: .2
    });



    // Utility section animations
    gsap.from('.utility__title', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.utility__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });

    const utilityItem1TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.utility-item--1',
        start: 'center 80%',
        end: '20% top'
      }
    });
    utilityItem1TimeLine.from('.utility-item--1 .utility-item__title', {
      y: 100,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--1 .utility-item__text', {
      y: 100,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--1 .utility-item__img .item', {
      opacity: 0,
      duration: .2,
      stagger: .2
    });

    const utilityItem2TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.utility-item--2',
        start: 'center 80%',
        end: '20% top'
      }
    });
    utilityItem2TimeLine.from('.utility-item--2 .utility-item__title', {
      y: 100,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--2 .utility-item__text', {
      y: 100,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--2 .utility-item__img .first-step', {
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--2 .utility-item__img .second-step', {
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--2 .utility-item__img .third-step', {
      opacity: 0,
      duration: .3,
    });

    const utilityItem3TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.utility-item--3',
        start: 'center 80%',
        end: '20% top'
      }
    });
    utilityItem3TimeLine.from('.utility-item--3 .utility-item__title', {
      y: 100,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--3 .utility-item__text', {
      y: 100,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--3 .utility-item__img .main-item', {
      scale: .5,
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--3 .utility-item__img .first-step', {
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--3 .utility-item__img .second-step', {
      opacity: 0,
      duration: .3,
    })
    .from('.utility-item--3 .utility-item__img .third-step', {
      opacity: 0,
      duration: .3,
    });



    // Support section animations
    gsap.from('.support__title', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.support__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });

    const supportTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.support-numbers',
        start: 'center 80%',
        end: '20% top'
      }
    });
    supportTimeLine.from('.circle-l', {
      duration: .4,
      opacity: 0,
      x: -100
    })
    .from('.circle-r', {
      duration: .4,
      opacity: 0,
      x: 100
    }, '-=.4')
    .from('.support-numbers', {
      duration: .4,
      delay: .2,
      opacity: 0,
      y: 100
    });
    


    // Instruction section animations
    gsap.from('.instruction__title', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.instruction__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });

    const instructionItem1TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.instruction-item--1',
        start: 'center 80%',
        end: '20% top'
      }
    });
    instructionItem1TimeLine.from('.instruction-item--1 .instruction-item__descr', {
      delay: .2,
      x: -100,
      opacity: 0,
      duration: .4,
    })
    .from('.instruction-item--1 .instruction-item__img', {
      x: 100,
      opacity: 0,
      duration: .4,
    }, '-=.4');

    const instructionItem2TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.instruction-item--2',
        start: 'center 80%',
        end: '20% top'
      }
    });
    instructionItem2TimeLine.from('.instruction-item--2 .instruction-item__descr', {
      delay: .2,
      x: -100,
      opacity: 0,
      duration: .4,
    })
    .from('.instruction-item--2 .instruction-item__img', {
      x: 100,
      opacity: 0,
      duration: .4,
    }, '-=.4');

    const instructionItem3TimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '.instruction-item--3',
        start: 'center 80%',
        end: '20% top'
      }
    });
    instructionItem3TimeLine.from('.instruction-item--3 .instruction-item__descr', {
      delay: .2,
      x: -100,
      opacity: 0,
      duration: .4,
    })
    .from('.instruction-item--3 .instruction-item__img', {
      x: 100,
      opacity: 0,
      duration: .4,
    }, '-=.4');
    


    // Questions section animations
    gsap.from('.questions__title', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.questions__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });
    gsap.from('.questions-contact', {
      opacity: 0,
      y: 100,
      duration: .4,
      delay: .1,
      scrollTrigger: {
        trigger: '.questions__title',
        start: 'top 80%',
        end: 'top 30%',
      }
    });
    gsap.from('.questions-accordion__item', {
      opacity: 0,
      duration: .4,
      delay: .1,
      stagger: .1,
      scrollTrigger: {
        trigger: '.questions-accordion',
        start: 'top 80%',
        end: 'top 30%',
      }
    });
  }
 

});








