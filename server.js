/** Server Related Vars */
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

/** Framework Related functions */

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public-parcel/dist/'))
app.use(express.urlencoded({extended:true}))

/** Routes */
// const rooms = {}

// app.get('/', (req, res) => {
//     res.render('index', {rooms:rooms})
// })


// app.get('/:room', (req, res) => {
//     res.render('room', {roomname:req.params.room})
// })

/** Port */

server.listen(5500)

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