document.querySelectorAll('.carousel').forEach(carousel => {
    const elements = carousel.querySelectorAll('img, video');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let index = 0;

    function showElement(idx) {
        elements.forEach(el => {
            el.classList.remove('active');
            if (el.tagName === 'VIDEO') {
                el.pause();
                el.currentTime = 0;
            }
            el.style.display = 'none';
        });
        elements[idx].classList.add('active');
        elements[idx].style.display = 'block';
    }

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + elements.length) % elements.length;
        showElement(index);
    });

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % elements.length;
        showElement(index);
    });

    showElement(index);
});


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


function normalizarTexto(texto) {
    return texto
        .normalize("NFD")               // Remove acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove marcas de acento
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");      // Remove espaços e pontuações
}

function calcularSimilaridade(a, b) {
    let erro = 0;
    const minLength = Math.min(a.length, b.length);
    for (let i = 0; i < minLength; i++) {
        if (a[i] !== b[i]) erro++;
    }
    erro += Math.abs(a.length - b.length);
    return erro;
}

const inputBusca = document.getElementById('buscaPlanta');
inputBusca.addEventListener('input', () => {
    const termo = normalizarTexto(inputBusca.value);
    const opcoes = document.querySelectorAll('.opcao');

    opcoes.forEach(opcao => {
        const nomePlanta = opcao.querySelector('h4')?.textContent || '';
        const nomeNormalizado = normalizarTexto(nomePlanta);
        const similaridade = calcularSimilaridade(nomeNormalizado, termo);
        
        if (termo === "" || nomeNormalizado.includes(termo) || similaridade <= 2) {
            opcao.style.display = "flex";
        } else {
            opcao.style.display = "none";
        }
    });
});

