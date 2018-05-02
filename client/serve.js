const http    = require('http')
      ,Redis  = require('ioredis')
      ,uuidv1 = require('uuid/v1')
      ;

var redis = new Redis(6379, process.env.REDIS_SERVER);

function serve(ip, port) {
    redis.set('u-id', uuidv1());
    http.createServer((req, res) => {
        redis.get('u-id', (err, result) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(req.headers));
            res.end(`\nThere's no plase like ${ip}:${port}\n 
                     Server UUID:  ${result}`);
        })
    }).listen(port, ip);
    console.log(`Server running at http://${ip}:${port}/`);
}

serve('0.0.0.0', 9000);