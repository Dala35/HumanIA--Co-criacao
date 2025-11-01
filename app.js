function alertMessage(msg) {
    const box = document.createElement('div');
    box.textContent = msg;
    box.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: #6d28d9;
        color: white; padding: 12px 20px; border-radius: 10px;
        opacity: 0; transition: opacity 0.5s; z-index: 1000;
    `;
    document.body.appendChild(box);
    setTimeout(()=> box.style.opacity=1,10);
    setTimeout(()=> {
        box.style.opacity=0;
        setTimeout(()=> box.remove(),500);
    }, 3000);
}

// SPA Navigation
function navigateTo(page, articleId=null){
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p=> { p.classList.add('hidden'); p.style.opacity=0; });

    if(page==='post-detail' && articleId){
        const article = articles.find(a=>a.id===articleId);
        const detail = document.getElementById('post-detail-content');
        detail.querySelector('h1').textContent = article.title;
        detail.querySelector('.tag').textContent = article.tag;
        detail.querySelector('.text-md').textContent = `Publicado em ${article.date}`;
        detail.querySelector('.prose').innerHTML = article.content;
    }

    const target = document.getElementById(page+'-content');
    target.classList.remove('hidden');
    setTimeout(()=> target.style.opacity=1,10);

    // Ativa link do menu
    const links = document.querySelectorAll('.nav-link');
    links.forEach(l=> l.classList.remove('active'));
    if(page!=='post-detail') links.forEach(l=>{
        if(l.getAttribute('onclick').includes(`('${page}')`)) l.classList.add('active');
    });

    if(page==='blog') renderBlog();
    window.scrollTo({top:0, behavior:'smooth'});
}

// Carrega inicial
window.onload = ()=> {
    const start = window.location.hash ? window.location.hash.substring(1) : 'home';
    navigateTo(start);
};
