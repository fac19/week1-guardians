// Nav JS
function showNav() {
    var navLinks = document.querySelector("#nav-links-id");
    if (navLinks.classList === "nav-links") {
        navLinks.className += "toggle-on";
    }else {
        navLinks.className = "nav-links"
    }
}

let getHamburger = document.querySelector(".hamburger-icon-container");
getHamburger.addEventListener("click", showNav);
