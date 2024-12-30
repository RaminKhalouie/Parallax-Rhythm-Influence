const toggle = document.getElementById('toggle');
const close = document.getElementById('toggle-close');
const nav = document.getElementById('nav-menu');
const lis = nav.querySelectorAll('li>a>span');
const main = document.querySelector('main');

const masks = document.querySelectorAll('.mask');
const imagesMask = document.querySelectorAll('.mask-image');

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


// masks.forEach((el) => {
//     el.dataset.top = el.offsetTop;
// });

window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    main.style.transform = 'translateY(-' + (sy / 3) + 'px)';

    masks.forEach((el) => {
        if ((sy - (window.innerHeight / 2) >= el.offsetTop)) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    imagesMask.forEach((el) => {
        if ((sy - (window.innerHeight / 2) >= el.offsetTop)) {
            el.classList.add('w-40');
        } else {
            el.classList.remove('w-40');
        }
    });
});