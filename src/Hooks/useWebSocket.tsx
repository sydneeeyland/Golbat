import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5174');

function useWebSocket() {
  const [list, setList] = useState([]);

  const filteredContactList = () => {
    socket.emit('filterContactList');
  };

  useEffect(() => {
    socket.on('filteredContactList', (data) => setList(data));
  }, []);

  return { list, filteredContactList };
}

export default useWebSocket;
