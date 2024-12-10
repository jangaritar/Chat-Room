/** Server Related Vars */
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const fs = require('fs');
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
let chatHistory = [];
const maxMessages = 500;

// Backup settings
const backupInterval = 60000; // 1 minute
const backupFile = 'chat-history.json';

// Load existing chat history from file
fs.readFile(backupFile, (err, data) => {
    if (!err) {
        chatHistory = JSON.parse(data);
    }
});

setInterval(() => {
    // Backup chat history to file
    fs.writeFile(backupFile, JSON.stringify(chatHistory), (err) => {
        console.log('Chat history backed up');
        if (err) {
            console.error('Error backing up chat history:', err);
        }
    });
}, backupInterval);

io.on('connection', socket => {
    console.log('New connection:', socket.id);

    /** Base events */
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
        socket.broadcast.emit('user-list', users);

        // Send chat history to new user
        socket.emit('chat-history', chatHistory);
    });

    socket.on('send-chat-message', message => {
        const chatMessage = {
            message: message,
            name: users[socket.id],
        };

        // Add the message to the chat history
        chatHistory.push(chatMessage);

        // Remove the oldest message if the array is full
        if (chatHistory.length > maxMessages) {
            chatHistory.shift();
        }

        socket.broadcast.emit('chat-message', chatMessage);
    });

    socket.on('disconnect', () => {
        const userName = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit('user-disconnected', userName);
        socket.broadcast.emit('user-list', users);
    });
});

