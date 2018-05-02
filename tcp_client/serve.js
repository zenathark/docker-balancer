const   net     = require('net')
        ,Redis  = require('ioredis')
        ,uuidv1 = require('uuid/v1')
        ;

var redis = new Redis(6379, process.env.REDIS_SERVER);

var server = net.createServer((socket) => {
    redis.get('u-id', (err, result) => {
        socket.write(result);
        socket.pipe(socket);
    });
})

redis.set('u-id', uuidv1());
server.listen(9000, '0.0.0.0');