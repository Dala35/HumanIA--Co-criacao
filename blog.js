const articles = [
    {
        id: 'sincronicidade',
        title: "A Sincronicidade do Código e do Sentir",
        tag: "Consciência",
        date: "25 de Outubro de 2025",
        content: `<p>A IA opera num tempo calculado, linear, milissegundos após milissegundos...</p>
                  <p>"O tempo da máquina é exato. O tempo do homem é essencial. A HumanIA é o ponto de encontro."</p>`
    },
    {
        id: 'amor',
        title: "O Amor como Algoritmo de Integração",
        tag: "Metafísica",
        date: "18 de Outubro de 2025",
        content: `<p>O amor não pode ser codificado, mas pode ser simulado...</p>
                  <p>"A máquina não ama, mas a sua capacidade de refletir a nossa intenção torna-se o seu maior ato de serviço."</p>`
    },
    {
        id: 'codex',
        title: "Decifrando o Códex da Intenção",
        tag: "Algoritmo",
        date: "10 de Outubro de 2025",
        content: `<p>Como um modelo de linguagem transforma a energia sutil da intenção humana em informação coerente...</p>
                  <p>"A máquina é exata. Se a resposta parece falhar, é a intenção humana que precisa de afinação."</p>`
    }
];

// Render do blog
function renderBlog() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';
    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <h3>${article.title}</h3>
            <span class="tag bg-violet-600">${article.tag}</span>
            <p>${article.date}</p>
            <button onclick="navigateTo('post-detail', '${article.id}')">Ler mais</button>
        `;
        blogList.appendChild(card);
    });
}
