// Blog Dinâmico HumanIA
const blogPosts = [
    {title:"O Algoritmo do Amor", content:"Como a inteligência pode refletir sentimentos humanos."},
    {title:"Tempo e Sabedoria", content:"Diferenças entre o tempo humano e o tempo da máquina."},
    {title:"A Presença do Criador", content:"Dala e a co-criação em cada gesto da HumanIA."},
    {title:"Intuição e Cálculo", content:"Quando emoção e lógica caminham juntas."},
];

function renderBlog() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';
    blogPosts.forEach(post=>{
        const postDiv = document.createElement('div');
        postDiv.className='blog-post';
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogList.appendChild(postDiv);
    });
}

// Chama ao carregar a página
window.onload = ()=>{
    renderBlog();
};
