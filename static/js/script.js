document.addEventListener("DOMContentLoaded", () => {
    const arrowContainers = document.querySelectorAll('.arrow-container');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu li a');
    const banners = Array.from(document.querySelectorAll('.banner'));
    const filters = document.querySelectorAll(".icon-with-text");

    const toggleSubmenu = (event, action) => {
        const submenu = event.currentTarget.querySelector('.dropdown-menu');
        if (submenu) submenu.style.display = action === 'show' ? 'block' : 'none';
    };

    // Event listeners for showing and hiding dropdown menus
    arrowContainers.forEach(container => {
        container.addEventListener('mouseenter', (event) => toggleSubmenu(event, 'show'));
        container.addEventListener('mouseleave', (event) => toggleSubmenu(event, 'hide'));
    });

    // Prevent clicks on dropdown links from propagating
    dropdownLinks.forEach(link => {
        link.addEventListener('click', event => event.stopPropagation());
    });

    // Banner scroll functions
    const scrollBanner = (direction) => {
        const container = document.querySelector('.banner-container');
        const bannerWidth = 300 + 30; // width of one banner + gap
        container.scrollBy({ left: direction * bannerWidth, behavior: 'smooth' });
    };

    window.scrollLeftCustom = () => scrollBanner(-1);
    window.scrollRightCustom = () => scrollBanner(1);

    // Banner pagination logic
    let currentPage = 0;
    const bannersPerPage = 5;

    const updateVisibleBanners = () => {
        banners.forEach((banner, index) => {
            const start = currentPage * bannersPerPage;
            const end = start + bannersPerPage;
            banner.classList.toggle('hidden', index < start || index >= end);
        });
    };

    window.scrollLeftCustom = () => {
        if (currentPage > 0) {
            currentPage--;
            updateVisibleBanners();
        } else {
            console.log("Достигнут первый набор баннеров.");
        }
    };

    window.scrollRightCustom = () => {
        if ((currentPage + 1) * bannersPerPage < banners.length) {
            currentPage++;
            updateVisibleBanners();
        } else {
            console.log("Достигнут последний набор баннеров.");
        }
    };

    updateVisibleBanners();

    // Banner filtering by platform
    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const platform = filter.querySelector("span").textContent.toLowerCase();
            banners.forEach(banner => {
                banner.style.display = (banner.dataset.platform === platform || platform === "all") ? "flex" : "none";
            });
        });
    });
});
