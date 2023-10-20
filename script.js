document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-button");
    // const menuItems = document.querySelectorAll(".mobile-nav ul li a"); // Loại bỏ dòng này
    let isMenuOpen = false;

    menuButton.addEventListener("click", function () {
        if (!isMenuOpen) {
            mobileNav.style.left = "0";
        } else {
            mobileNav.style.left = "-100%";
        }
        isMenuOpen = !isMenuOpen;
    });

    // Đóng menu khi nút "x" được nhấn
    closeBtn.addEventListener("click", function () {
        mobileNav.style.left = "-100%";
        isMenuOpen = false;
    });

    /*
    // Loại bỏ đoạn mã này
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            mobileNav.style.left = "-100%";
            isMenuOpen = false;
        });
    });
    */
});
