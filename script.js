document.addEventListener("DOMContentLoaded", function () {
    // Form submit alert
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("This is not functional form");
    });

    // Menu toggle
    const menuIcon = document.querySelector(".nBar img");
    const menuList = document.querySelector(".nBar .list");

    menuIcon.addEventListener("click", function () {
        menuList.classList.toggle("show");
    });
});
