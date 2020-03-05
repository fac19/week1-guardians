// Nav JS
function showNav() {
    var navLinks = document.getElementById("nav-links-id");
    if (navLinks.className === "nav-links") {
        navLinks.className += "toggle-on";
    }else {
        navLinks.className = "nav-links"
    }
}

