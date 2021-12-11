const buttons = document.querySelectorAll('button')
const mostrarMensagem = buttons[0]
const esconderMensagem = buttons[1]

const msg = document.querySelector('#msg')

mostrarMensagem.addEventListener('click', () => {
    msg.textContent = "Olá, Mundo!"
})

esconderMensagem.addEventListener('click',() => {
    msg.textContent = "";
})