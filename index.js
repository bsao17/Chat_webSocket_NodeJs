const { isObject } = require('util');

const app = require ('express')();
const http = require ('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message : ' + msg);
    });
});

http.listen(2005, () => {
    console.log('listen on * : 2005');
});