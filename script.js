// Nav JS
function navToggle() {
    var getNav = document.querySelector(".nav-links");
    getNav.classList.toggle("toggle-on");
}

let getHamburger = document.querySelector(".hamburger-icon-container");
getHamburger.addEventListener("click", navToggle);
