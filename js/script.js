const buttonHeader = document.getElementById('button_header');
const navbar = document.getElementById('navbar')

const containerFaq = document.querySelectorAll('.container')
buttonHeader.addEventListener('click', (e) => {
    e.preventDefault();

    buttonHeader.classList.toggle('open')
    navbar.classList.toggle('active')
});

containerFaq.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('active')
    })
})