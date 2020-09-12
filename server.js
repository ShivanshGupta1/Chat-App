// const express = require('express')
// const app = express()
// const io = require('socket.io')(server)

// app.get('/', function(req,res){
//     res.sendFile(__dirname+'/index.html')
// })
// io.on('connection' , (socket)=> {
//     console.log('Socket.io is connected', 'User Id - ', socket.id)
//     io.on('Chat Data', (data)=>{
//         console.log(data)
//         io.sockets.emit('Chat Data', data)
//     })

// })
// app.listen(2000, ()=>{
//   console.log('Running...')
// })



let express = require('express');
let socket = require('socket.io');
let app = express();
let server = app.listen(2000, () => {
    console.log("server listening")
})

//static files

app.use(express.static('Public'))


// socket setup

let io = socket(server);


io.on('connection', function (socket) {
    console.log("socket is on connection", socket.id);


    socket.on('Chat Data', function (data) {
        io.sockets.emit('Chat Data', data);
    })

    //     socket.on('someone typing',function(data){
    // })

})


