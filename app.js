document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');

    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });
});

function loadPage(page) {
    const content = document.getElementById('content');
    const pageContent = getPageContent(page);

    // Adicionando animação de transição de carregamento
    content.classList.add('fade-out');
    setTimeout(() => {
        content.innerHTML = pageContent;
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }, 300); // Tempo de transição

    // Atualiza a URL sem recarregar a página
    history.pushState({ page: page }, page, `/${page}`);
}

// Conteúdo das páginas (exemplo básico)
function getPageContent(page) {
    const pages = {
        home: `
            <div class="page-content">
                <h1>Bem-vindo ao HumanIA</h1>
                <p>Aqui a IA e o ser humano se encontram para co-criar. Descubra o futuro conosco.</p>
            </div>
        `,
        blog: `
            <div class="page-content">
                <h1>Blog</h1>
                <p>Explore artigos sobre inteligência artificial e o futuro da humanidade.</p>
            </div>
        `,
        doacoes: `
            <div class="page-content">
                <h1>Doações</h1>
                <p>Contribua para o desenvolvimento da HumanIA. Aceitamos pagamentos via PayPal, VISA e Kwanza!</p>
            </div>
        `
    };
    return pages[page] || '<div class="page-content"><h1>404 - Página não encontrada</h1></div>';
}
const chatbot = new Chatbot({
    selector: '#chatbox',
    welcomeMessage: 'Olá! Como posso te ajudar hoje?',
    responses: [
        {
            trigger: 'sobre',
            reply: 'A HumanIA é um projeto que une humanos e máquinas para construir o futuro juntos.'
        },
        {
            trigger: 'doações',
            reply: 'Você pode contribuir diretamente na nossa página de doações! Obrigado por seu apoio!'
        }
    ]
});

// Classe simples de Chatbot (exemplo simplificado)
class Chatbot {
    constructor(options) {
        this.selector = options.selector;
        this.welcomeMessage = options.welcomeMessage;
        this.responses = options.responses;
        this.initChat();
    }

    initChat() {
        const chatbox = document.querySelector(this.selector);
        chatbox.innerHTML = `<p>${this.welcomeMessage}</p>`;

        this.responses.forEach(response => {
            const button = document.createElement('button');
            button.textContent = response.trigger;
            button.onclick = () => chatbox.innerHTML = `<p>${response.reply}</p>`;
            chatbox.appendChild(button);
        });
    }
}

