document.addEventListener("DOMContentLoaded", () => {
    
    const botaoTema = document.getElementById('theme-toggle');
    const iconeTema = botaoTema.querySelector('i');

    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            iconeTema.classList.replace('fa-moon', 'fa-sun');
        } else {
            iconeTema.classList.replace('fa-sun', 'fa-moon');
        }
    });

    const botoesAbas = document.querySelectorAll('.btn-aba');
    const textosAbas = document.querySelectorAll('.texto-aba');

    botoesAbas.forEach(botao => {
        botao.addEventListener('click', () => {
            const identificador = botao.getAttribute('data-tab');

            botoesAbas.forEach(b => b.classList.remove('active'));
            textosAbas.forEach(t => t.classList.remove('active'));

            botao.classList.add('active');
            document.getElementById(identificador).classList.add('active');
        });
    });
    const barras = document.querySelectorAll('.barra-progresso');
    
    const preencherGrafico = () => {
        barras.forEach(barra => {
            const tamanhoAlvo = barra.getAttribute('data-width');
            barra.style.width = tamanhoAlvo;
        });
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                preencherGrafico();
                observador.unobserve(entrada.target); 
            }
        });
    }, { threshold: 0.2 });

    const secaoPanorama = document.getElementById('panorama');
    if (secaoPanorama) {
        observador.observe(secaoPanorama);
    }
});

function abrirModal(idDoModal) {
    document.getElementById(idDoModal).style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function fecharModal(idDoModal) {
    document.getElementById(idDoModal).style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

function fecharModalAoClicarFora(evento, idDoModal) {
    if (evento.target.classList.contains('janela-modal')) {
        fecharModal(idDoModal);
    }
}