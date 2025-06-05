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