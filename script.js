// Mensagem de boas-vindas ao carregar a página
window.addEventListener('load', function() {
    alert('Bem-vindo ao JhonArt, aproveite sua visita!');
});

// Função para abrir e fechar o menu de navegação (caso seja necessário)
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Função para capturar o evento de envio do formulário de newsletter
document.getElementById('newsletter').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar
    const emailInput = document.querySelector('#newsletter input');
    if (emailInput) {
        alert(`Obrigado por se inscrever, ${emailInput.value}!`);
    }
});

// Função para rolar suavemente até a seção clicada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Função para adicionar a classe 'show' quando o elemento aparecer na tela usando IntersectionObserver
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
}

// Chama quando a página carrega
window.addEventListener('load', fadeInOnScroll);
