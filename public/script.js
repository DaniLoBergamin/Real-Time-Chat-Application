// FRONT END

const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    // Checagem de caixa de mensagem (Vázio)
    if (caixaMensagem.value !== ""){
        socket.emit('nova mensagem', caixaMensagem.value);
        // Após envio da mensagem, limpar caixa de mensagem
        caixaMensagem.value = "";
    }
})



socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');    // <li></li>
    elementoMensagem.textContent = msg;             // <li>Olá</li>
    elementoMensagem.classList.add('mensagem');     // <li class='mensagem'>Olá</li>
    chat.appendChild(elementoMensagem);             // <div id='mensagens'><li class='mensagem'>Olá</li></div>
})