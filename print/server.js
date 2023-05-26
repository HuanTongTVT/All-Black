const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('有一个新的连接建立');

  socket.on('clickLeftButton', () => {
    // 在这里执行模拟点击左键的操作
    console.log('收到点击左键指令');
  });

  socket.on('disconnect', () => {
    console.log('连接已断开');
  });
});