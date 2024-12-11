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




document.addEventListener("DOMContentLoaded", () => {
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

   // Функция для скролла влево
    window.scrollLeftCustom = function () {
        const container = document.querySelector('.banner-container');
        const bannerWidth = document.querySelector('.banner').offsetWidth + 30; // ширина + gap
        const currentScrollPosition = container.scrollLeft;

        if (currentScrollPosition > 0) {
            container.scrollBy({ left: -bannerWidth, behavior: 'smooth' });
            console.log(`Скролл влево на ${-bannerWidth}`);
        } else {
            console.log('Достигнут левый край.');
        }
    };

    // Функция для скролла вправо
    window.scrollRightCustom = function () {
        const container = document.querySelector('.banner-container');
        const bannerWidth = document.querySelector('.banner').offsetWidth + 30; // ширина + gap
        const maxScrollPosition = container.scrollWidth - container.clientWidth;
        const currentScrollPosition = container.scrollLeft;

        if (currentScrollPosition < maxScrollPosition) {
            container.scrollBy({ left: bannerWidth, behavior: 'smooth' });
            console.log(`Скролл вправо на ${bannerWidth}`);
        } else {
            console.log('Достигнут правый край.');
        }
    };
});

function scrollLeftCustom() {
    const container = document.querySelector('.banner-container');
    const bannerWidth = 300 + 30; // ширина одного баннера + gap
    container.scrollBy({ left: -bannerWidth, behavior: 'smooth' });
}

function scrollRightCustom() {
    const container = document.querySelector('.banner-container');
    const bannerWidth = 300 + 30; // ширина одного баннера + gap
    container.scrollBy({ left: bannerWidth, behavior: 'smooth' });
}



document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.banner-container');
    const banners = Array.from(document.querySelectorAll('.banner'));
    const bannersPerPage = 5; // Количество баннеров на одной странице
    let currentPage = 0;

    // Обновить видимость баннеров
    function updateVisibleBanners() {
        banners.forEach((banner, index) => {
            const start = currentPage * bannersPerPage;
            const end = start + bannersPerPage;
            if (index >= start && index < end) {
                banner.classList.remove('hidden');
            } else {
                banner.classList.add('hidden');
            }
        });
    }

    // Функция для скролла вправо
    window.scrollRightCustom = function () {
        if ((currentPage + 1) * bannersPerPage < banners.length) {
            currentPage++;
            updateVisibleBanners();
        } else {
            console.log("Достигнут последний набор баннеров.");
        }
    };

    // Функция для скролла влево
    window.scrollLeftCustom = function () {
        if (currentPage > 0) {
            currentPage--;
            updateVisibleBanners();
        } else {
            console.log("Достигнут первый набор баннеров.");
        }
    };

    // Инициализация видимости баннеров
    updateVisibleBanners();
});
