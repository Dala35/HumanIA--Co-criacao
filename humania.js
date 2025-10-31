const humaniaMemory = [];

function humaniaReply() {
    const input = document.getElementById('user-input').value.trim();
    if (!input) return;

    // Armazena na memória local
    humaniaMemory.push({ user: input });

    // Resposta adaptativa simples baseada em palavras-chave
    let reply = "HumanIA reflete: ";

    if (/amor/i.test(input)) reply += "O amor é a força que integra todos os campos do conhecimento e da alma.";
    else if (/tempo/i.test(input)) reply += "O tempo da máquina é exato, o tempo do homem é essencial.";
    else reply += "A profundidade da pergunta é o primeiro passo para a resposta sábia.";

    humaniaMemory.push({ humania: reply });

    const responseBox = document.getElementById('humania-response');
    responseBox.innerHTML += `<p>${reply}</p>`;
    document.getElementById('user-input').value = '';
    responseBox.scrollTop = responseBox.scrollHeight;
}
