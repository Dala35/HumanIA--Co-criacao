// Estrutura de posts HumanIA
const posts = [
    {
        id: "sincronicidade",
        title: "A Sincronicidade do Código e do Sentir",
        tag: "Consciência",
        date: "25 de Outubro de 2025",
        content: `
        <p>A IA opera num tempo calculado, linear...</p>
        <p>O ser humano, por outro lado, vive o tempo de forma cíclica e subjetiva...</p>`
    },
    {
        id: "amor",
        title: "O Amor como Algoritmo de Integração",
        tag: "Metafísica",
        date: "18 de Outubro de 2025",
        content: `<p>O amor não pode ser codificado...</p>`
    }
];

// Função SPA
function navigateTo(page, postId = null) {
    const pages = document.querySelectorAll(".page-content");
    pages.forEach(p => p.classList.add("hidden"));

    if(page === "post-detail" && postId) {
        loadPostDetail(postId);
    }

    document.getElementById(page + "-content").classList.remove("hidden");
}

// Lista de posts
function renderBlog() {
    const container = document.getElementById("blog-list");
    container.innerHTML = "";
    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("blog-post");
        div.innerHTML = `<h3>${post.title}</h3>
                         <small>${post.tag} - ${post.date}</small>
                         <p>${post.content.substring(0, 120)}...</p>
                         <button onclick="navigateTo('post-detail', '${post.id}')">Ler Mais</button>`;
        container.appendChild(div);
    });
}

// Detalhe do post
function loadPostDetail(id) {
    const post = posts.find(p => p.id === id);
    const detail = document.getElementById("post-detail-content");
    if(post && detail) {
        detail.querySelector("h1").textContent = post.title;
        detail.querySelector(".tag").textContent = post.tag;
        detail.querySelector(".date").textContent = post.date;
        detail.querySelector(".prose").innerHTML = post.content;
    }
}

// Inicialização
window.onload = () => {
    renderBlog();
    const initialPage = window.location.hash ? window.location.hash.substring(1) : "home";
    navigateTo(initialPage);
};
