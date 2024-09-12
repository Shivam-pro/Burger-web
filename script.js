let menu = document.querySelector(".menu-bar");
let nav_ul = document.querySelector(".nav-ul");
let close_btn = document.querySelector(".close");
let nav_links = document.querySelectorAll(".underline")
function Open_menu(){
    nav_ul.classList.add('responsive');
}
function Close_menu(){
    nav_ul.classList.remove('responsive');
}
Array.from(nav_links).forEach(e => {
    e.addEventListener("click", (n) => {
        nav_ul.classList.add('nav-ul');
        nav_ul.classList.remove('responsive');
    })
});

const shadowHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        if (!header.classList.contains('shadow-header')) {
            header.classList.add('shadow-header');
        }
    } else {
        if (header.classList.contains('shadow-header')) {
            header.classList.remove('shadow-header');
        }
    }
}
window.addEventListener('scroll', shadowHeader);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true,
})
sr.reveal(`.home_data, .footer`)
sr.reveal(`.home-dish`, {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal(`.home_burger`, {delay: 1200, distance: '100px', duration: 1500})
sr.reveal(`.ingredient`, {delay: 1600, interval: 100})
sr.reveal(`.recipe_image , .delivery_image , .contact_image`, {origin: 'left'})
sr.reveal(`.recipe_data , .delivery_data , .contact_data`, {origin: 'right'})
sr.reveal(`.popular_card`, {interval: 100})