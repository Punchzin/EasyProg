const menu = document.getElementById('menu');
const closeButton = document.getElementById('closeButton');

// Função para exibir a sobreposição
function openMenu(e) {
    const id = e.target.classList[1];

    const menuOptions = {
        'bi-files': () => {
            menu.append()
        },
        'bi-gear': () => {},
        'bi-question-cirlce': () => {},
        'bi-play': () => {},
        'bi-pause': () => {},
        'bi-arrow-clockwise': () => {},
    }

    console.log(id);
    menu.classList.add('active');
}

// Função para ocultar a sobreposição
function closeMenu() {
    menu.classList.remove('active');
}

// Adicionar um evento de clique ao botão de fechar
closeButton.addEventListener('click', closeMenu);
menu.addEventListener('mouseout', () => {
    window.addEventListener('click', () => {
        closeMenu()
    })
});

// Adicionar um evento de clique à navegação lateral (para abrir a sobreposição)
const sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('click', openMenu);
