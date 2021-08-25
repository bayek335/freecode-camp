const navToggle = document.querySelector('#btn-toggle');
const navlinks = document.querySelector('.nav-links') 
const btnCopy = document.querySelectorAll('#btn-copy');

console.log(navToggle)

navToggle.addEventListener('click', () => {
    console.log('kik')
    if(!navlinks.classList.contains('active')){
        navlinks.classList.add('active')
    }else{
        navlinks.classList.remove('active')
    }
})


let i = 0;
for (i; i < btnCopy.length; i++) {
    const code = document.querySelectorAll('code')[i]
    btnCopy[i].addEventListener('click',() => {
        navigator.clipboard.writeText(code.textContent);
    })
}
