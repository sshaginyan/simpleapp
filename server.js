require('http').createServer((req, res) => { res.end('Hello World -- feature 1'); }).listen(process.env.PORT || 8080);
