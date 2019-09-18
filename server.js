require('http').createServer((req, res) => { res.end('123 okay! hello ABC'); }).listen(process.env.PORT || 8080);
