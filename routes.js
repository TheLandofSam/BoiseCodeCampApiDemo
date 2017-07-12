var server = require('./index');

server.get('/api/v1/posts', (req, res, next) => {
    res.send(200, 'Hello World!');
});
