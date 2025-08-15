document.addEventListener("DOMContentLoaded", function () {
    // Form submit alert (only if form exists)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("This is not functional form");
        });
    }

    // Menu toggle
    const menuIcon = document.querySelector(".nBar img");
    const menuList = document.querySelector(".nBar .list");

    if (menuIcon && menuList) {
        menuIcon.addEventListener("click", function () {
            menuList.classList.toggle("show");
        });
    }
});
