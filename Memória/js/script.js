const tiro = document.querySelector('img')
const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login-form')

function atirar() {
    tiro.src="./imagens/sangue.png"
}

function sair() {
    tiro.src="./imagens/alvo.png"
}

//FUNÇÃO PARA ACIONAR O BOTÃO JOGAR//
const validateInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return; //PARECIDO COM O ELSE
    }

    button.setAttribute('disabled', "")
}

//FUNÇÃO PARA GUARDAR O NOME

const handleSubmit = (event) => {
    event.preventDefault(); //Previne que o submit recarregue a página

    localStorage.setItem('player', input.value); //Salva a chave player no storage local
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput)

form.addEventListener('submit', handleSubmit)