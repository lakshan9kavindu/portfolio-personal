document.addEventListener("DOMContentLoaded", function () {
    // Alert for forms
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("This is not a functional form");
        });
    }

    // Menu toggle
    const menuIcon = document.querySelector(".menu-icon");
    const menuList = document.querySelector(".nBar .list");

    if (menuIcon && menuList) {
        menuIcon.addEventListener("click", function () {
            menuList.classList.toggle("show");
        });

        // Optional: close menu when clicking a link
        menuList.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                menuList.classList.remove("show");
            });
        });
    }
});
