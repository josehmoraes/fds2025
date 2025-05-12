document.getElementById('botao').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    
    if (mensagem.textContent === "") {
        mensagem.textContent = "Curioso! Kkkk. Agora você viu a mensagem. Pode clicar de novo para fechá-la.";
    } else {
        mensagem.textContent = "";
    }
});