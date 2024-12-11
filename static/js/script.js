document.addEventListener("DOMContentLoaded", () => {
    const arrowContainers = document.querySelectorAll('.arrow-container');

    arrowContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            let submenu = container.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            let submenu = container.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'none';
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    let arrowContainers = document.querySelectorAll('.arrow-container');

    arrowContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            let submenu = container.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            let submenu = container.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'none';
        });
    });

   // Функция для скролла влево
    window.scrollLeftCustom = function () {
        let container = document.querySelector('.banner-container');
        let bannerWidth = document.querySelector('.banner').offsetWidth + 30; // ширина + gap
        let currentScrollPosition = container.scrollLeft;

        if (currentScrollPosition > 0) {
            container.scrollBy({ left: -bannerWidth, behavior: 'smooth' });
            console.log(`Скролл влево на ${-bannerWidth}`);
        } else {
            console.log('Достигнут левый край.');
        }
    };

    // Функция для скролла вправо
    window.scrollRightCustom = function () {
        let container = document.querySelector('.banner-container');
        let bannerWidth = document.querySelector('.banner').offsetWidth + 30; // ширина + gap
        let maxScrollPosition = container.scrollWidth - container.clientWidth;
        let currentScrollPosition = container.scrollLeft;

        if (currentScrollPosition < maxScrollPosition) {
            container.scrollBy({ left: bannerWidth, behavior: 'smooth' });
            console.log(`Скролл вправо на ${bannerWidth}`);
        } else {
            console.log('Достигнут правый край.');
        }
    };
});

function scrollLeftCustom() {
    let container = document.querySelector('.banner-container');
    let bannerWidth = 300 + 30; // ширина одного баннера + gap
    container.scrollBy({ left: -bannerWidth, behavior: 'smooth' });
}

function scrollRightCustom() {
    let container = document.querySelector('.banner-container');
    let bannerWidth = 300 + 30; // ширина одного баннера + gap
    container.scrollBy({ left: bannerWidth, behavior: 'smooth' });
}



document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.banner-container');
    let banners = Array.from(document.querySelectorAll('.banner'));
    let bannersPerPage = 5; // Количество баннеров на одной странице
    let currentPage = 0;

    // Обновить видимость баннеров
    function updateVisibleBanners() {
        banners.forEach((banner, index) => {
            let start = currentPage * bannersPerPage;
            let end = start + bannersPerPage;
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
    updateVisibleBanners();
});
