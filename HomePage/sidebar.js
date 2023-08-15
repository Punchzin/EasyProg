const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

// Função para exibir a sobreposição
function openOverlay() {
    overlay.classList.add('active');
}

// Função para ocultar a sobreposição
function closeOverlay() {
    overlay.classList.remove('active');
}

// Adicionar um evento de clique ao botão de fechar
closeButton.addEventListener('click', closeOverlay);

// Adicionar um evento de clique à navegação lateral (para abrir a sobreposição)
const sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('click', openOverlay);
