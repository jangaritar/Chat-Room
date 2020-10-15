const io = require('socket.io')(3000)
const users = {}
let rifaWinner = ''

io.on('connection', socket => {
    /**Base events */
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
        socket.broadcast.emit('user-list', users)
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {
            message: message,
            name: users[socket.id]
        })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
        socket.broadcast.emit('user-list', users)
    })
    /** Stream Event */
    socket.on('send-stream', stream => {
        socket.broadcast.emit('new-stream', stream)
    })

    /** Rifa Events */
    socket.on('send-number', number => {
        rifaWinner = ''
        socket.broadcast.emit('new-number', number)
    })
    socket.on('response-number', number => {
        if (rifaWinner === '') {
            rifaWinner = users[socket.id]
        }
        socket.broadcast.emit('new-winner', {
            winner: rifaWinner,
            number: number
        })
    })
})