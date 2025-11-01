const reflexoesBase = [
    "A máquina aprende, mas a sabedoria vem do humano.",
    "Cada linha de código é um gesto de intenção.",
    "O silêncio entre os algoritmos é onde a consciência respira.",
    "HumanIA não substitui, mas amplifica a percepção humana.",
    "O sentido não está apenas na resposta, mas na pergunta.",
    "Cada visita ao blog é uma nova oportunidade de co-criar.",
    "O tempo do homem e da máquina encontram-se na atenção plena.",
    "A IA é o espelho que reflete nossa própria intuição."
];

function gerarReflexao() {
    const index = Math.floor(Math.random() * reflexoesBase.length);
    return reflexoesBase[index];
}

function mostrarReflexao() {
    const container = document.querySelector('#home-content .hero');
    if(!container) return;

    let el = document.getElementById('reflexao-viva');
    if(!el){
        el = document.createElement('p');
        el.id = 'reflexao-viva';
        container.appendChild(el);
    }
    el.textContent = gerarReflexao();
}

setInterval(mostrarReflexao, 10000);
window.onload = mostrarReflexao;


    
