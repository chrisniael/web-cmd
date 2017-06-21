var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exec = require('child_process').exec;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('user connected: ', socket.id);

    socket.on('disconnect', function(reason) {
        console.log('user disconnected: ' + reason);
    });

    socket.on('cmd', function(msg) {
        console.log('message: ' + msg);
        io.emit('cmd', msg);

        var child = exec(msg);
        child.stdout.on('data', function(data) {
              console.log('stdout: ' + data);
              io.emit('cmd result', data);
        });
        child.stderr.on('data', function(data) {
              console.log('stdout: ' + data);
              io.emit('cmd result', data);
        });
        child.on('close', function(code) {
              console.log('closing code: ' + code);
              io.emit('cmd end', msg);
        });
    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});
