var http = require('http');

function serve(ip, port) {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(req.headers));
        res.end(`\nThere's no plase like ${ip}:${port}\n`);
    }).listen(port, ip);
    console.log(`Server running at http://${ip}:${port}/`);
}

serve('0.0.0.0', 9000);