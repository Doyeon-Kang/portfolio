'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const sub_menu = document.querySelector('.navbar__sub__menu');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        sub_menu.classList.add('remove');
    } else {
        navbar.classList.remove('navbar--dark');
        sub_menu.classList.remove('remove');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// Navbaar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// Handle click on "contact me" button on home
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
    scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > (homeHeight/2)) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

