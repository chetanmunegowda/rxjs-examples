var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
    });
    res.end();
  } else if (req.url === '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
      });
      res.write(JSON.stringify({ success: true }, 0, ));
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ error: 'Not Found' }, 0, ));
    return res.end();
  }
}).listen(9001);
