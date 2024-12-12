document.addEventListener("DOMContentLoaded", () => {
    let arrowContainers = document.querySelectorAll('.arrow-container');
    let dropdownLinks = document.querySelectorAll('.dropdown-menu li a');
    let banners = Array.from(document.querySelectorAll('.banner'));
    let filters = document.querySelectorAll(".icon-with-text");
    let container = document.querySelector('.banner-container');

    const toggleSubmenu = (event, action) => {
        let submenu = event.currentTarget.querySelector('.dropdown-menu');
        if (submenu) submenu.style.display = action === 'show' ? 'block' : 'none';
    };

    arrowContainers.forEach(container => {
        container.addEventListener('mouseenter', (event) => toggleSubmenu(event, 'show'));
        container.addEventListener('mouseleave', (event) => toggleSubmenu(event, 'hide'));
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', event => event.stopPropagation());
    });

    // Функция скролла баннера
    let scrollBanner = (direction) => {
        const bannerWidth = 300 + 30; // ширина одного баннера + gap
        container.scrollBy({ left: direction * bannerWidth, behavior: 'smooth' });
    };

    window.scrollLeftCustom = () => scrollBanner(-1);
    window.scrollRightCustom = () => scrollBanner(1);

    let currentPage = 0;
    let bannersPerPage = 5;

    const updateVisibleBanners = () => {
        banners.forEach((banner, index) => {
            const start = currentPage * bannersPerPage;
            const end = start + bannersPerPage;
            banner.classList.toggle('hidden', index < start || index >= end);
        });

        // После обновления баннеров пересчитываем прокрутку
        updateContainerWidth();
    };

    // Функция для обновления ширины контейнера после изменения видимости баннеров
    const updateContainerWidth = () => {
        let visibleBanners = banners.filter(banner => banner.style.display !== 'none');
        if (visibleBanners.length > 0) {
            container.style.width = `${visibleBanners.length * (300 + 30)}px`;
        }
    };

    const paginate = (direction) => {
        let visibleBanners = banners.filter(banner => banner.style.display !== 'none');
        let maxPages = Math.ceil(visibleBanners.length / bannersPerPage);

        if (direction === -1 && currentPage > 0) {
            currentPage--;
            updateVisibleBanners();
            container.scrollLeft -= 300 + 30; // Корректируем прокрутку при движении влево
        } else if (direction === 1 && (currentPage + 1) < maxPages) {
            currentPage++;
            updateVisibleBanners();
            container.scrollLeft += 300 + 30; // Корректируем прокрутку при движении вправо
        }
    };

    window.scrollLeftCustom = () => paginate(-1);
    window.scrollRightCustom = () => paginate(1);

    updateVisibleBanners();

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            let platform = filter.querySelector("span").textContent.toLowerCase();
            let filteredBanners = banners.filter(banner => banner.dataset.platform === platform || platform === "all");

            banners.forEach(banner => {
                if (filteredBanners.includes(banner)) {
                    banner.style.display = "flex";
                } else {
                    banner.style.display = "none";
                }
            });

            let totalVisibleBanners = filteredBanners.length;
            let maxPages = Math.ceil(totalVisibleBanners / bannersPerPage);

            if (currentPage >= maxPages) {
                currentPage = 0;
            }

            updateVisibleBanners();

            updateContainerWidth();
        });
    });
});
