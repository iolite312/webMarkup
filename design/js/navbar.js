var navbar = document.querySelector(".hamburger-menu");
var dropdown = document.querySelector(".top-nav > ul");
navbar.addEventListener('click', () => {
    dropdown.classList.toggle('open')
})