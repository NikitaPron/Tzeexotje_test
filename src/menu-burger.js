const btnOpen = document.querySelector('.menu__open');
const menu = document.querySelector('.menu__wrapper');

btnOpen.addEventListener('click', () => {
    const display = window.getComputedStyle(menu).getPropertyValue("display");
    if(display === 'flex') {
        menu.style.display = 'none';
        btnOpen.childNodes.forEach(c => {
            c.classList.remove('cross');
        })

    } else {
        menu.style.display = 'flex';
        btnOpen.childNodes.forEach(c => {
            c.classList.add('cross');
        })
    }
})