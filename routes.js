var server = require('./server');

server.get('/api/v1/posts', (req, res, next) => {
    res.send(200, 'Hello World!');
});

server.get('/', (req, res, next) => {
    res.send(200, 'Hello World!');
});