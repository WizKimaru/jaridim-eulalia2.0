/*
 document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let index = 0;

        function showImage(idx) {
            images.forEach(img => img.classList.remove('active'));
            images[idx].classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            showImage(index);
        });

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % images.length;
            showImage(index);
        });

        showImage(index);
    });
*/

// Efeito de destaque ao passar o mouse sobre a faixa
const banner = document.querySelector('.frete-banner');
const texto = document.getElementById('frete-msg');

banner.addEventListener('mouseenter', () => {
    texto.style.animationPlayState = 'paused';
    banner.style.backgroundColor = '#337A5B';
});

banner.addEventListener('mouseleave', () => {
    texto.style.animationPlayState = 'running';
    banner.style.backgroundColor = '#285A43';
});
