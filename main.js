
window.onscroll = function () {
    const navBar = document.getElementById("navBar")

    if (window.scrollY >= 100) {
        navBar.style.backgroundColor = "white";
        navBar.style.boxShadow = "#878787 -3px -1px 17px 1px"
    }
    else {
        navBar.style.backgroundColor = "transparent";
        navBar.style.boxShadow = "none"
    }
}

