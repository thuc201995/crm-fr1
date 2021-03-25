// const handler = require("serve-handler");
const http = require('http');
const express = require('express');
const app = express();
const httpApp = express();
const spdy = require('spdy');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
var options = {
  key: fs.readFileSync('/etc/ssl/private/xoso.key'),
  cert: fs.readFileSync('/etc/ssl/certs/xoso.crt'),
  ca: fs.readFileSync('/etc/ssl/certs/xoso_ca_bundle.crt'),
};
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = spdy.createServer(options, app);
const serverHttp = http.createServer(httpApp);
httpApp.get('*', function (req, res) {
  console.log(req.headers.host);
  res.redirect('https://' + req.headers.host + ':1111' + req.url);
});

// // have it listen on 80
serverHttp.listen(1112);
server.listen(1111, () => {
  console.log('Running at http://localhost:3000');
});
