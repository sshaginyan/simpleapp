require('http').createServer((req, res) => { res.end('AAA okay! hello ABC'); }).listen(process.env.PORT || 8080);
