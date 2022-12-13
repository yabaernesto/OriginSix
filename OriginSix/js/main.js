// abre e fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.onclick = function() {
        nav.classList.toggle('show');
    }
}

// quando clicar em um item do menu, esconder menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.onclick = function() {
        nav.classList.remove('show');
    }
}

// adicionar sombra ao header quando der scroll
const header = document.querySelector('#header');
// function para adicionar sombra ao header changeHeaderWhenScroll
function changeHeaderWhenScroll() {
    const navHeight = header.offsetHeight;
    
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

// carousel swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

// scrollreveal: Mostrar elementos quando scroll for activado
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    { interval: 100 }
);

// Botão para voltar no top
const backToTopButton = document.querySelector('.back-to-top');
// acao do botao top
function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// activar botao de link
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');

        const chekpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (chekpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*='+ sectionId +']')
                .classList.add('active');
        } else {
            document
                .querySelector('nav ul li a[href*='+ sectionId +']')
                .classList.remove('active');
        }
    }
}

window.addEventListener('scroll', () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});