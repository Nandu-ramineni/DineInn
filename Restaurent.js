let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
}
window.onscroll = () =>{
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}
let slides = document.querySelectorAll('.restaurent .slides-container .slide');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
let countDate = new Date('july 5, 2023 00:00:00').getTime();
function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;
    let seconds = 1000;
    let minutes = seconds*60;
    let hours   = minutes*60;
    let day     = hours*24;
    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('seconds').innerText= s;
}
setInterval(function(){
    countDown();
},1000);