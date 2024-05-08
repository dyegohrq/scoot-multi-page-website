const buttonHeader = document.getElementById('button_header');
const navbar = document.getElementById('navbar')

buttonHeader.addEventListener('click', (e) => {
    e.preventDefault();

    buttonHeader.classList.toggle('open')
    navbar.classList.toggle('active')
})