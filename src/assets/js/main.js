const toggle = document.getElementById('toggle');
const close = document.getElementById('toggle-close');
const nav = document.getElementById('nav-menu');
const lis = nav.querySelectorAll('li>a>span');

toggle.addEventListener('click', () => {
    nav.classList.remove('translate-x-full');
    lis.forEach((el) => {
        el.classList.add('animate-path');
    })
});
close.addEventListener('click', () => {
    nav.classList.add('translate-x-full');
    lis.forEach((el) => {
        el.classList.remove('animate-path');
    })
});
