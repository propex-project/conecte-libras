function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    navLinks.classList.toggle('active'); 
    menuToggle.classList.toggle('active'); 
}


const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);
