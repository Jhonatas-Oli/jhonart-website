// Exibir mensagem de boas-vindas de forma menos intrusiva
window.addEventListener('load', function() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcome-message');
    welcomeMessage.textContent = 'Bem-vindo ao JhonArt, aproveite sua visita!';
    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.classList.add('hide');
    }, 5000); // A mensagem desaparece após 5 segundos
});

// Função de menu responsivo
const menuButton = document.querySelector('.menu-button'); // Ícone de hambúrguer
const navMenu = document.querySelector('nav ul');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
}

// Validação de email no formulário da newsletter com feedback em tempo real
document.getElementById('newsletter').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar
    const emailInput = document.querySelector('#newsletter input');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput && emailPattern.test(emailInput.value)) {
        alert(`Obrigado por se inscrever, ${emailInput.value}!`);
    } else {
        emailInput.setCustomValidity('Por favor, insira um e-mail válido.');
        emailInput.reportValidity();
    }
});

// Animação personalizada para fade-in
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if (entry.target.classList.contains('slide-right')) {
                    entry.target.classList.add('slide-right-show');
                }
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('load', fadeInOnScroll);
