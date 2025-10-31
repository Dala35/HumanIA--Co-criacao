function navigateTo(page) {
    document.querySelectorAll('.page-content').forEach(p => {
        p.classList.add('hidden');
        p.style.opacity = 0;
    });

    const target = document.getElementById(`${page}-content`);
    if (target) {
        target.classList.remove('hidden');
        setTimeout(() => target.style.opacity = 1, 10);
    }

    if (page === 'blog') renderBlog();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializa Home
window.onload = () => navigateTo('home');
