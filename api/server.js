const socket = io();

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
}

socket.on('chat message', (msg) => {
  const messagesDiv = document.getElementById('messages');
  const newMessage = document.createElement('div');
  newMessage.textContent = msg;
  messagesDiv.appendChild(newMessage);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
