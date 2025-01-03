const toggle = document.getElementById('toggle');
const close = document.getElementById('toggle-close');
const nav = document.getElementById('nav-menu');
const lis = nav.querySelectorAll('li>a>span');
const main = document.querySelector('main');

const masks = document.querySelectorAll('.mask');
const imagesMask = document.querySelectorAll('.mask-image');

const works = document.querySelector('#works');
const worksContainer = works.querySelector('&>div');
const worksVideos = worksContainer.querySelectorAll('&>div');


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

    if (sy - 80 >= works.offsetTop) {
        const temp = sy - works.offsetTop;
        worksContainer.style.transform = 'translateX(100%) translateX(-' + temp + 'px)';

        const windowWidth = window.innerWidth / 3;

        if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[1].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[0].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[0].firstElementChild.firstElementChild.play();
        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[2].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[1].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[1].firstElementChild.firstElementChild.play();
        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[3].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[2].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[2].firstElementChild.firstElementChild.play();
        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[4].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[3].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[3].firstElementChild.firstElementChild.play();
        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[5].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[4].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[4].firstElementChild.firstElementChild.play();
        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[6].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[5].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[5].firstElementChild.firstElementChild.play();
        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth + worksVideos[7].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[6].firstElementChild.classList.remove('translate-y-1/2');
            worksVideos[6].firstElementChild.firstElementChild.play();

        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth * 2 + worksVideos[7].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            worksVideos[7].firstElementChild.classList.remove('translate-y-1/2');


        } else if (temp >= windowWidth && temp <= (worksVideos[0].clientWidth * 3 + worksVideos[7].offsetLeft)) {
            worksVideos.forEach((el, i) => {
                el.firstElementChild.classList.add('translate-y-1/2');
                if (i != worksVideos.length - 1) {
                    const vid = el.firstElementChild.firstElementChild;
                    vid.pause();
                }
            });
            const nextScroll = worksVideos[0].clientWidth * 3 + worksVideos[7].offsetLeft;
            main.style.transform = 'translateY(-' + (sy - nextScroll + window.innerHeight) + 'px)';
        }

    } else {
        main.style.transform = 'translateY(-' + (sy) + 'px)';
    }

    masks.forEach((el) => {
        if ((sy >= el.offsetTop - (window.innerHeight / 3))) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    imagesMask.forEach((el) => {
        if ((sy >= el.offsetTop - (window.innerHeight / 3))) {
            el.classList.add('w-40');
        } else {
            el.classList.remove('w-40');
        }
    });

});