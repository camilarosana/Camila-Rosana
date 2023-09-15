const navBar = document.querySelector('.navbar');
const mobileNavBar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.menu-mobile');

button.addEventListener('click', ()=>{
    mobileNavBar.classList.toggle('active');
});