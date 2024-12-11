document.addEventListener("DOMContentLoaded", () => {
    // Вместо '.menu-item' используем '.arrow-container', если в HTML именно она оборачивает стрелку и меню
    const arrowContainers = document.querySelectorAll('.arrow-container');

    arrowContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            const submenu = container.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            const submenu = container.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'none';
        });
    });
});
