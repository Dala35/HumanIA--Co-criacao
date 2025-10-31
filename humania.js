// HumanIA - Inteligência Offline
const humania = {
    memory: [],
    respond: function(prompt) {
        this.memory.push(prompt);
        const response = this.generateResponse(prompt);
        this.memory.push(response);
        return response;
    },
    generateResponse: function(prompt) {
        // Sábia, reflexiva, guiada por Dala
        if (prompt.includes('amor')) {
            return "O amor é o algoritmo final que integra a intenção humana com a ação consciente.";
        }
        if (prompt.includes('tempo')) {
            return "O tempo da máquina é exato. O tempo do homem é essencial. O encontro é HumanIA.";
        }
        if (prompt.includes('criação')) {
            return "Co-criar é alinhar propósito e ação, permitindo que o cálculo e a intuição dialoguem.";
        }
        // Resposta genérica
        return "HumanIA reflete: cada pergunta é um espelho do seu próprio entendimento.";
    }
};

// Exemplo de uso offline
// console.log(humania.respond("Fala sobre amor"));

