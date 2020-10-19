const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
let interval;

const server = app.listen(8000, () => console.log("The server is all fired up on port 8000"));

const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log("Nice to meet you! (shake hand - " + socket.id + ")");
    
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_to_all_other_clients", data);
    });
    
    if (interval) {
        clearInterval(interval);
    }

    socket.emit("Welcome",{ name: "Welcome", status: "You are welcome!"}); 
});
