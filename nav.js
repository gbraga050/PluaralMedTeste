window.onscroll = () => {
    myFunction()
};
var navbar = document.querySelector(".bg-nav"),
    sticky = navbar.offsetTop;

function myFunction() {
    1 < window.scrollY ? navbar.classList.add("bg-white") : navbar.classList.remove("bg-white");
}
