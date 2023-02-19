export default function accordion(accordionWrapperEl) {

  const accordionHeaders = accordionWrapperEl.querySelectorAll('[data-accordion="title"]');

  accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.addEventListener('click', (event) => {
      const currentAccordionItem = event.currentTarget.parentNode;
      const accordionContent = currentAccordionItem.querySelector('[data-accordion="content"]');

      // Toggle the active class on the current accordion item
      currentAccordionItem.classList.toggle('active');

      // Toggle the height of the accordion content
      if (currentAccordionItem.classList.contains('active')) {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.height = '0px';
      }
    });
  });
}