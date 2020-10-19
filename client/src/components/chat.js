import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState( () => io(":8000"));
    const [response, setResponse] = useState({});

    useEffect(() => {
        socket.on('Welcome', data => {
            console.log("Triggered the welcome event");
            console.log(data);
            setResponse(data)});
        
        /*socket.on("FromAPI", data => {
            setResponse(data);
            });
            */
        socket.on("hello_message", () => setResponse("Got the hello message!" + Math.random()));

        return () => socket.disconnect(true);
    },[]);

    return(
        <div>
            Chat here! The socket message is: {response.name} : {response.status}
        </div>
    )
}

export default Chat;
