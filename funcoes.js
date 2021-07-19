function onLoad(){
    console.log('Sistema carregado, mãos a obra!');
}

function onMenuClick() {
    const menu = document.querySelector('.menu');

    const menuAberto = menu.classList.contains('menu-open');

    if (menuAberto) {
        menu.classList.remove('menu-open');
    }
    else {
        menu.classList.add('menu-open');
    }
}