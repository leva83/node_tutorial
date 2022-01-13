const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
}).listen(8080);

//   run the code and try to request this address: 
//   http://localhost:8080/?year=2017&month=July