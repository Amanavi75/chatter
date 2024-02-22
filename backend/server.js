
const app = require('express')();
//*Creates an Express application. The express() function is a top-level function exported by the express module.

const server = require('http').createServer(app);



const io = require("socket.io")(server,{
    cors:{
        origin:"*",
    }
});

io.on("connection",(socket)=>{

    console.log("what is socket",socket);
    console.log("socket is active");

    socket.on("chat",(payload)=>{
        console.log("payload",payload)
        io.emit("chat",payload);
    })

})

server.listen("5500",()=>{
    console.log("server started at port 7500");
})
