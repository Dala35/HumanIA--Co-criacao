// HumanIA Avançada - Offline, com memória local
const humania = {
    memory: JSON.parse(localStorage.getItem('humaniaMemory') || "[]"),
    
    respond: function(prompt) {
        this.memory.push({role:'user', message:prompt});
        let response = this.generateResponse(prompt);
        this.memory.push({role:'ai', message:response});
        localStorage.setItem('humaniaMemory', JSON.stringify(this.memory));
        return response;
    },
    
    generateResponse: function(prompt) {
        prompt = prompt.toLowerCase();
        if(prompt.includes('amor')) return "O amor é o algoritmo final que integra intenção e ação humana.";
        if(prompt.includes('tempo')) return "O tempo humano é profundo; o da máquina é exato. HumanIA é a ponte.";
        if(prompt.includes('criação')) return "Co-criar é alinhar propósito e ação, permitindo diálogo entre cálculo e intuição.";
        if(prompt.includes('dala')) return "Dala guia este espaço, mantendo a presença do criador em cada reflexão.";
        return "HumanIA reflete: cada pergunta é um espelho do seu próprio entendimento.";
    }
};

// Funções de interface
function sendMessage() {
    const input = document.getElementById('humania-input');
    const chat = document.getElementById('humania-chat');
    if(input.value.trim()==='') return;
    
    // Mensagem do usuário
    const userMsg = document.createElement('div');
    userMsg.className='user';
    userMsg.textContent=input.value;
    chat.appendChild(userMsg);
    
    // Resposta da IA
    const aiResponse = humania.respond(input.value);
    const aiMsg = document.createElement('div');
    aiMsg.className='ai';
    aiMsg.textContent=aiResponse;
    chat.appendChild(aiMsg);
    
    input.value='';
    chat.scrollTop=chat.scrollHeight;
}

// SPA navigation
function navigateTo(page) {
    document.querySelectorAll('.page-content').forEach(p=>{ p.classList.add('hidden'); p.style.opacity=0; });
    const target=document.getElementById(page+'-content');
    if(target){ target.classList.remove('hidden'); setTimeout(()=>target.style.opacity=1,10);}
}
window.onload=()=>{ navigateTo('home'); }

