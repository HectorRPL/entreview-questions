// Add your javascript here
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    const multiselectCheckbox = document.getElementById('multiselect');

    // Inicializar el primer ítem expandido
    const firstDescription = accordions[0].querySelector('.description');
    const firstCollapseIcon = accordions[0].querySelector('.collapse-icon');
    firstDescription.style.display = 'block';
    firstCollapseIcon.style.display = 'inline';

    // Función para manejar clic en título
    accordions.forEach(accordion => {
        const titleSection = accordion.querySelector('.title-section');
        titleSection.addEventListener('click', function() {
            const isExpanded = accordion.querySelector('.description').style.display === 'block';
            if (multiselectCheckbox.checked) {
                // Comportamiento para múltiples secciones expandidas
                toggleAccordion(accordion, !isExpanded);
            } else {
                // Asegurarse de que todos los demás ítems estén colapsados
                accordions.forEach(acc => {
                    if (acc !== accordion) {
                        toggleAccordion(acc, false);
                    }
                });
                toggleAccordion(accordion, !isExpanded);
            }
        });
    });

    function toggleAccordion(accordion, expand) {
        const description = accordion.querySelector('.description');
        const expandIcon = accordion.querySelector('.expand-icon');
        const collapseIcon = accordion.querySelector('.collapse-icon');

        if (expand) {
            description.style.display = 'block';
            expandIcon.style.display = 'none';
            collapseIcon.style.display = 'inline';
        } else {
            description.style.display = 'none';
            expandIcon.style.display = 'inline';
            collapseIcon.style.display = 'none';
        }
    }
});
