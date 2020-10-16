import feather from 'feather-icons'
import AOS from 'aos'
import {
  jarallax
} from 'jarallax'
import Bulma from '@vizuaalog/bulmajs';

function preloader() {
  document.querySelector('.pageloader').classList.toggle('is-active')
  AOS.init()
}

document.addEventListener('DOMContentLoaded', () => {
  window.onbeforeunload = function () {
    preloader()
  }

  setTimeout(() => {
    preloader()
  }, 2000)


  feather.replace()
  jarallax(document.querySelectorAll('.has-parallax'), {
    speed: 0.40
  })
  jarallax(document.querySelectorAll('.has-parallax-contain'), {
    speed: 1.40
  })


  /** Socket stuff */

  const socket = io('http://localhost:5500')

  const messageContainer = document.getElementById('message-container')
  const messageForm = document.getElementById('send-container')
  const messageInput = document.getElementById('message-input')
  const loginForm = document.getElementById('login-form')
  let name = ''

  /** Login form Stuff */

  loginForm.addEventListener('submit', e => {
    e.preventDefault()
    name = document.getElementById('username').value
    appendMessage(`${name}, estás en ENEND 2020`)
    socket.emit('new-user', name)
    if (name != '') {
      preloader()
      setTimeout(() => {
        document.querySelector('#login-container').classList.add('is-hidden')
        document.querySelector('#room-container').classList.remove('is-hidden')
        preloader()
      }, 2000)
    } else {
      alert('Necesitamos tu nombre para dejarte ingresar. 😁😁')
    }
  })

  /** Message stuff */

  socket.on('chat-message', data => {
    appendMessage(`
    <div class="content has-margin-bottom-10 is-small has-text-primary">${data.name}</div>
    <div>${data.message}</div>
    `, 'is-dark')
  })

  /** User Connection and Disconnection stuff */

  socket.on('user-connected', name => {
    appendMessage(`${name} ha entrado a la sala.`, 'is-success')
  })

  socket.on('user-disconnected', name => {
    appendMessage(`${name} ha salido de la sala.`, 'is-danger')
  })

  /** Message UI Controller */

  messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`
    <div class="content has-margin-bottom-10 is-small has-text-primary">${name}</div>
    <div>${message}</div>
    `, 'is-primary')
    socket.emit('send-chat-message', message)
    messageInput.value = ''
  })

  /** Message UI abstract */

  function appendMessage(message, type) {
    let messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.classList.add('has-padding-10')
    messageElement.classList.add(type)
    messageElement.innerHTML = message
    messageContainer.appendChild(messageElement)
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  /** Stream Stuff */

  const iframeContainer = document.getElementById('iframe-container')

  socket.on('new-stream', stream => {
    iframeContainer.innerHTML = stream
  })

  /** Rifa Stuff */

  const rifaContainer = document.getElementById('rifa-ui-container')
  const numberForm = document.getElementById('number-form')
  const numberInput = document.getElementById('number-input')

  socket.on('new-number', winnernumber => {
    rifa(winnernumber)
  })


  let number = ''

  function rifa(winnernumber){
    if(rifaContainer){
      rifaContainer.classList.remove('is-hidden')
      numberForm.addEventListener('submit', e => {
        e.preventDefault()
        number = numberInput.value
        if(number != winnernumber) {
          alert('Ups 😥😥, ese no era el número. ¿Quieres intentar de nuevo?')
        }else{
          socket.emit('response-number', number)
          alert('¡Parece que tuviste suerte! Toca esperar a ver si fuiste el primero 🎉🎉🎉')
        }
        numberInput.value = ''
      })
    }
  }
})