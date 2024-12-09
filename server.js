/** Server Related Vars */
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:1234', // Cambia al dominio/puerto de tu cliente
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    },
});

/** Framework Related functions */
app.use(express.static(__dirname + '/public-parcel/dist/'));

const corsOptions = {
    origin: 'http://localhost:1234',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

/** Server Related functions */
server.listen(5500, () => {
    console.log('Listening on port 5500');
});

const users = {};
let rifaWinner = '';

io.on('connection', socket => {
    console.log('New connection:', socket.id);

    /** Base events */
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
        socket.broadcast.emit('user-list', users);
    });

    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {
            message: message,
            name: users[socket.id],
        });
    });

    socket.on('disconnect', () => {
        const userName = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit('user-disconnected', userName);
        socket.broadcast.emit('user-list', users);
    });

    /** Stream Event */
    socket.on('send-stream', stream => {
        socket.broadcast.emit('new-stream', stream);
    });

    /** Rifa Events */
    socket.on('send-number', number => {
        rifaWinner = '';
        socket.broadcast.emit('new-number', number);
    });

    socket.on('response-number', number => {
        if (!rifaWinner) {
            rifaWinner = users[socket.id];
        }
        socket.broadcast.emit('new-winner', {
            winner: rifaWinner,
            number: number,
        });
    });
});
