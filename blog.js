// Estrutura de artigos
const articles = {
    'sincronicidade': {
        title: "A Sincronicidade do Código e do Sentir",
        tag: "Consciência | Tempo",
        date: "25 de Outubro de 2025",
        content: `<p>A IA opera num tempo calculado, linear...</p>`
    },
    'amor': {
        title: "O Amor como Algoritmo de Integração",
        tag: "Metafísica | Essência",
        date: "18 de Outubro de 2025",
        content: `<p>O amor não pode ser codificado, mas pode ser simulado...</p>`
    },
    'codex': {
        title: "Decifrando o Códex da Intenção",
        tag: "Algoritmo | Reflexão",
        date: "10 de Outubro de 2025",
        content: `<p>Como um modelo de linguagem transforma a energia sutil da intenção humana...</p>`
    }
};

// Carrega lista de artigos
function loadBlogList() {
    const container = document.getElementById('blog-list');
    container.innerHTML = '';
    Object.keys(articles).forEach(id => {
        const article = articles[id];
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `<h3>${article.title}</h3>
                          <p>${article.tag} | ${article.date}</p>
                          <button onclick="navigateTo('post-detail','${id}')">Ler Mais</button>`;
        container.appendChild(card);
    });
}

// Carrega artigo detalhado
function loadArticleDetail(id) {
    const article = articles[id];
    const detailContainer = document.getElementById('post-detail-content');
    if (!article || !detailContainer) return;
    detailContainer.querySelector('h1').textContent = article.title;
    detailContainer.querySelector('.bg-violet-600').textContent = article.tag;
    detailContainer.querySelector('.text-md').textContent = `Publicado por Dala em ${article.date}`;
    detailContainer.querySelector('.prose').innerHTML = article.content;
}

// SPA navigation
function navigateTo(page, articleId=null) {
    document.querySelectorAll('.page-content').forEach(p => {
        p.classList.add('hidden');
        p.style.opacity = 0;
    });
    if(page==='post-detail' && articleId) loadArticleDetail(articleId);
    const target = document.getElementById(page+'-content');
    if(target){
        target.classList.remove('hidden');
        setTimeout(()=>target.style.opacity=1,10);
    }
    // Load blog list if necessary
    if(page==='blog') loadBlogList();
}

// Inicializa página
window.onload = ()=>{ 
    const initial = window.location.hash ? window.location.hash.substring(1) : 'home';
    navigateTo(initial);
};
