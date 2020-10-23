function openMenu() {
    const menu = document.querySelector('body > header > nav');
    menu.classList.add('opened')
}

function closeMenu() {
    const menu = document.querySelector('body > header > nav');
    menu.classList.remove('opened');
}

function scrollTo(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}