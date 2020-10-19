import React, { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from "./components/chat";

function App() {
/*
  const [socket] = useState(() => io(':8000'));

  useEffect( () => {
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true);
  },[]);
*/
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
