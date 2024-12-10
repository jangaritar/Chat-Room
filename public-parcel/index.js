import feather from 'feather-icons'

document.addEventListener('DOMContentLoaded', () => {

  feather.replace()

  /** Socket stuff */

  const socket = io('http://'+location.hostname+':5500')

  const messageContainer = document.getElementById('message-container')
  const messageForm = document.getElementById('send-container')
  const messageInput = document.getElementById('message-input')
  const loginForm = document.getElementById('login-form')
  let name = ''

  /** Login form Stuff */

  loginForm.addEventListener('submit', e => {
    e.preventDefault()
    name = document.getElementById('username').value
    messageContainer.innerHTML = ''    
    localStorage.setItem('userName', name)
    socket.emit('new-user', name)
    if (name != '') {
      setTimeout(() => {
        appendMessage(`be welcome, ${name}.`)
        document.querySelector('#login-container').classList.add('is-hidden')
        document.querySelector('#room-container').classList.remove('is-hidden')
      }, 2000)
    } else {
      alert("insert your username")
    }
  })

  if (localStorage.getItem('userName') != null) {
    name = localStorage.getItem('userName')
    document.querySelector('#login-container').classList.add('is-hidden')
    document.querySelector('#room-container').classList.remove('is-hidden')
    socket.emit('new-user', name)
  }

  const logoutButton = document.getElementById('logout-button')
  logoutButton.addEventListener('click', () => {
    name = ''
    localStorage.removeItem('userName')
    document.querySelector('#login-container').classList.remove('is-hidden')
    document.querySelector('#room-container').classList.add('is-hidden')
    socket.emit('disconnect')
  })


  /** Message stuff */

  socket.on('chat-message', data => {
    appendMessage(`    
      <div class="has-text-right"><strong class="is-size-7">${data.name}</strong>: <span class="has-text-weight-light is-size-7">${data.message}</span></div>
    `, 'is-dark')
  })

  /** History stuff */

  socket.on('chat-history', history => {
    history.forEach(message => {
      appendMessage(`
        <div class="has-text-right"><strong class="is-size-7">${message.name}</strong>: <span class="has-text-weight-light is-size-7">${message.message}</span></div>
      `, 'is-dark');
    });
  });

  /** User Connection and Disconnection stuff */

  socket.on('user-connected', name => {
    appendMessage(`${name} has arrived in the room.`, 'is-success')
  })

  socket.on('user-disconnected', name => {
    appendMessage(`${name} has left the room.`, 'is-danger')
  })

  /** Message UI Controller */

  messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`
    
    <strong class="is-size-7">${name}</strong>: <span class="has-text-weight-light is-size-7">${message}</span>
    `, 'is-primary')
    socket.emit('send-chat-message', message)
    messageInput.value = ''
  })

  /** Message UI abstract */

  function appendMessage(message, type) {
    let messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.classList.add('is-size-7')
    messageElement.classList.add(type)
    messageElement.innerHTML = message
    messageContainer.appendChild(messageElement)
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
  
})