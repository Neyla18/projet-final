 export function toggle() {
    const hamburgerIcon = document.querySelector('.nav-toggle')
    const nav = document.querySelector('.menu-principal');
    hamburgerIcon.classList.toggle('active')
    nav.classList.toggle('active');
}