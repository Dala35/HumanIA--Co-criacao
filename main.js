const articles = {
    'sincronicidade': { title: "A Sincronicidade do Código e do Sentir", date: "25 de Outubro de 2025", content: "Conteúdo do post..." },
    'amor': { title: "O Amor como Algoritmo de Integração", date: "18 de Outubro de 2025", content: "Conteúdo do post..." },
    'codex': { title: "Decifrando o Códex da Intenção", date: "10 de Outubro de 2025", content: "Conteúdo do post..." }
};

function navigateTo(targetPage) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => { p.classList.add('hidden'); p.style.opacity = 0; });

    const target = document.getElementById(targetPage + '-content');
    if(target){ target.classList.remove('hidden'); setTimeout(()=> target.style.opacity=1, 10); }

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[onclick*="('${targetPage}')"]`)?.classList.add('active');

    if(targetPage==='blog'){ renderPosts(); }
}

function renderPosts() {
    const list = document.getElementById('posts-list');
    list.innerHTML = '';
    for(const key in articles){
        const post = articles[key];
        const div = document.createElement('div');
        div.className = 'post-card';
        div.innerHTML = `<h3>${post.title}</h3><small>${post.date}</small><p>${post.content.substring(0,100)}...</p>`;
        list.appendChild(div);
    }
}

window.onload = () => { navigateTo('home'); };
