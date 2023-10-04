// header Stick-top

let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
        // Scroll up the navbar appear
        document.getElementById('stickScrollUp').style.display = 'block';
    } else {
        //Scroll down the navbar dissapear
        document.getElementById('stickScrollUp').style.display = 'none';
    }

    lastScrollPosition = currentScrollPosition;
});



// Sidebar section

document.addEventListener("DOMContentLoaded", function () {
    const submenuItems = document.querySelectorAll(".has-submenu");

    submenuItems.forEach(function (item) {
        const submenu = item.querySelector(".submenu");
        submenu.style.display = "none"; // Hide submenu initially

        item.addEventListener("click", function (event) {
            submenu.style.display = (submenu.style.display === "none" || submenu.style.display === "") ? "block" : "none";
            event.stopPropagation();
        });
    });
});

