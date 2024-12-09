const admin='Jose'
const username=prompt('Nombre de usuario Administrador:',' ')
if (username===admin){
   const password1='Jose'
   const password = prompt('Si quieres administrar, necesitas una contraseña. Por favor, colocala ahora:',' ')
    if (password===password1){
        alert("Bienvenido")
     }
    else {
        alert('Contraseña incorrecta. Será enviado a la sala de inicio.')
        window.location="index.html"
    }
}
else {
  alert('Usuario incorrecto. Será enviado a la sala de inicio.')
  window.location="index.html"
}


document.addEventListener('DOMContentLoaded', () => {
    /** Obtaininga and rendering User List in JSON */
    const socket = io('https://'+location.hostname+':5500')

    const userContainer = document.getElementById('users-container')

    socket.on('user-list', users => {
        console.log(users)
        document.getElementById('total-users').innerHTML = Object.keys(users).length
        userContainer.innerHTML = ''
        Object.values(users).forEach(user => {
            appendUser(user)
        })
    })

    function appendUser(user) {
        let userElement = document.createElement('div')
        userElement.classList.add('message')
        userElement.classList.add('has-padding-10')
        userElement.innerHTML = user
        userContainer.appendChild(userElement)
        userContainer.scrollTop = userContainer.scrollHeight
    }

    /** Emiting new Stream */
    const streamSender = document.getElementById('stream-sender')
    const streamInput = document.getElementById('stream-input')

    streamSender.addEventListener('submit', e => {
        e.preventDefault()
        const stream = streamInput.value
        socket.emit('send-stream', stream)
        streamInput.value = ''
        alert('Su nuevo stream se está emitiendo.')
    })

    /** Emiting new RIFA number */

    const rifaForm = document.getElementById('rifa-form')
    const rifaInput = document.getElementById('rifa-input')

    rifaForm.addEventListener('submit', e => {
        e.preventDefault()
        const rifa = rifaInput.value
        socket.emit('send-number', rifa)
        rifaInput.value = ''
        alert('Su nueva rifa se está emitiendo.')
    })

    let rifaWinner = ''
 
    socket.on('new-winner', data => {
        let winnerContainer = document.querySelector('#rifa-container')
        if(rifaWinner === ''){
            rifawinner = data.winner
            let winnerElement = document.createElement('div')
            winnerElement.classList.add('message')
            winnerElement.classList.add('has-padding-10')
            winnerElement.innerHTML = data.winner + " ha ganado con el numero " + data.number
            winnerContainer.appendChild(winnerElement)
            winnerContainer.scrollTop = winnerContainer.scrollHeight
        }
    })

    socket.on('new-number', number => {
        rifawinner = ''
    })
})