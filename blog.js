function renderBlog() {
    const list = document.getElementById('blog-list');
    list.innerHTML = '';
    articles.forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-post';
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em> | Tags: ${post.tags.join(', ')}</p>
            <p>${post.content}</p>
        `;
        list.appendChild(div);
    });
}

function createPost() {
    const title = document.getElementById('new-title').value;
    const content = document.getElementById('new-content').value;
    const tags = document.getElementById('new-tags').value.split(',').map(t=>t.trim());

    if (!title || !content) return alert('Título e conteúdo são obrigatórios!');

    const newPost = { id: title.toLowerCase().replace(/\s+/g,'-'), title, content, tags, date: new Date().toLocaleDateString() };
    articles.push(newPost);
    renderBlog();

    document.getElementById('new-title').value = '';
    document.getElementById('new-content').value = '';
    document.getElementById('new-tags').value = '';
}
