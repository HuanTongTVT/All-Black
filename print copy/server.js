const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('有一个新的连接建立');

  socket.on('clickRightButton', () => {
    // 在这里执行模拟点击右键的操作
    console.log('收到点击右键指令');
    // 可以在这里调用模拟点击右键的函数或发送相应的控制指令给目标电脑
  });

  socket.on('disconnect', () => {
    console.log('连接已断开');
  });
});

server.listen(3000, () => {
  console.log('WebSocket服务器运行在端口 3000');
});
