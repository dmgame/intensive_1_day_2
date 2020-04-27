#Установка

```npm
npm i
```

#Запуск

```npm
npm run dev
```

#Полезные ссылки
1. [Socket.io документация](https://socket.io/)
2. [Как работают сокеты](https://tproger.ru/translations/what-are-web-sockets/)


#Frontend код

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button class="send-msg-btn">Send message</button>

  <script src="https://cdn.jsdelivr.net/npm/socket.io-client@2/dist/socket.io.js"></script>

  <script>
    const btn = document.querySelector('.send-msg-btn');
    const socket = io('http://localhost:3000');

    btn.addEventListener('click', () => {
      socket.emit('message', `Some message: ${Math.random()}`);
    });

    socket.on('connect', () => {
      console.log('connected');

      socket.emit('connect_room', { room_name: 'my room' });
    });

    socket.on('new_message', (msg) => {
      console.log(msg);
    });
    socket.on('room_message', (msg) => {
      console.log(msg);
    });

  </script>
</body>
</html>
```