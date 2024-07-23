document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentlyActiveAccordionItem = document.querySelector('.accordion-item.active');

            if (currentlyActiveAccordionItem && currentlyActiveAccordionItem !== header.parentElement) {
                currentlyActiveAccordionItem.classList.remove('active');
                currentlyActiveAccordionItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                currentlyActiveAccordionItem.querySelector('.accordion-icon').textContent = '+';
                currentlyActiveAccordionItem.querySelector('.accordion-content').style.maxHeight = 0;
                currentlyActiveAccordionItem.querySelector('.accordion-content').style.padding = 0;
            }

            header.parentElement.classList.toggle('active');
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            header.setAttribute('aria-expanded', !isExpanded);
            header.querySelector('.accordion-icon').textContent = isExpanded ? '+' : '-';
            const accordionContent = header.nextElementSibling;
            accordionContent.style.maxHeight = isExpanded ? '0' : accordionContent.scrollHeight + 'px';
            accordionContent.style.padding = isExpanded ? '0 15px' : '15px';
        });
    });
});
