// Mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert('Bem-vindo ao JhonArt, aproveite sua visita!');
};

// Função para abrir e fechar o menu de navegação (caso seja necessário)
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
}

// Função para capturar o evento de envio do formulário de newsletter
document.getElementById('newsletter').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar
    const emailInput = document.querySelector('#newsletter input').value;
    alert(`Obrigado por se inscrever, ${emailInput}!`);
});
// Função para rolar suavemente até a seção clicada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Função para adicionar a classe 'show' quando o elemento aparecer na tela
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Adicionar o evento de rolagem
window.addEventListener('scroll', fadeInOnScroll);

// Chamar a função quando a página carrega pela primeira vez
fadeInOnScroll();

