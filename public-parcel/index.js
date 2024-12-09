import feather from 'feather-icons'
import AOS from 'aos'
import {
  jarallax
} from 'jarallax'
import Bulma from '@vizuaalog/bulmajs';


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
    appendMessage(`${name}, Wellcome to the room.`)
    socket.emit('new-user', name)
    if (name != '') {
      setTimeout(() => {
        document.querySelector('#login-container').classList.add('is-hidden')
        document.querySelector('#room-container').classList.remove('is-hidden')
      }, 2000)
    } else {
      alert("insert your username")
    }
  })

  /** Message stuff */

  socket.on('chat-message', data => {
    appendMessage(`
    <div class="content has-margin-bottom-5 is-small has-text-primary">${data.name}</div>
    <div>${data.message}</div>
    `, 'is-dark')
  })

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
    <div class="content is-small has-text-primary margin-bottom-3">${name}</div>
    <div>${message}</div>
    `, 'is-primary')
    socket.emit('send-chat-message', message)
    messageInput.value = ''
  })

  /** Message UI abstract */

  function appendMessage(message, type) {
    let messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.classList.add('has-padding-5')
    messageElement.classList.add(type)
    messageElement.innerHTML = message
    messageContainer.appendChild(messageElement)
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  /** Stream Stuff */

  /** Rifa Stuff */




  
})