function addMensagem (card) {
    card.preventDefault();
    const titulo = document.getElementById('input-titulo').value;
    const texto = document.getElementById('input-mensagem').value;
    
    const mensagem = document.getElementById('grid');
    if (mensagem) {
        const parag = document.createElement('p');
        parag.innerHTML = `
        <div id="card">
            <p class="title">${titulo}</p>
            <div class="conteudo">
                <div id="criar-mensagem">
                    <p class="form">
                        <p id="mensagem"> ${texto}</p>
                    </p>
                    <br />
                </div>
            </div>
        </div>
            `
            const excluir = document.createElement('grid');
            excluir.innerText = 'Remover';
            excluir.setAttribute = ('class', 'remover-item');
            excluir.onclick = (ev) => parag.remove();
            parag.appendChild(excluir);

            mensagem.appendChild(parag);
    }
}

const enviar = document.getElementById('botao-enviar');
enviar.onclick = addMensagem;
