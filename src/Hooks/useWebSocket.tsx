import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5174');

function useWebSocket() {
  const [list, setList] = useState({
    '1': false,
    '2': false,
  });

  const sendMessage = (id: number) => {
    socket.emit('toggle_calling', { id, value: true });
  };

  useEffect(() => {
    socket.on('list_calling', (data) => {
      setList((prev) => ({
        ...prev,
        [data.id]: data.value,
      }));
    });
  }, []);

  return { list, sendMessage };
}

export default useWebSocket;
