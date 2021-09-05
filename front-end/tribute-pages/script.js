const toggle = document.querySelector('#toggle-switch');
const html = document.querySelector('html');

toggle.addEventListener('click', function () {
    if (html.dataset.mode === 'light') {
        html.setAttribute('data-mode', 'dark')
        toggle.classList.add('active')
    } else {
        html.setAttribute('data-mode', 'light')
        toggle.classList.remove('active')
    }
})