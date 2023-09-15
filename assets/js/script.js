const menuMobile = document.querySelector('.menu-mobile');
const mobileLinks = document.querySelector('.navbar-links');

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.toggle('active');
    mobileLinks.classList.toggle('active');
})