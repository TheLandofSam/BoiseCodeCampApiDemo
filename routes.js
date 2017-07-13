var server = require("./app");

server.get('/', function(req, res, next){
    res.send('Hello World!');
});

var postsController = require("./controllers/postsController");

/*** TODO
* Add a controller
* Implement GET/READ ALL
* Implement GET/READ ONE
* Implement PUT/UPDATE
* Implement CREATE/POST
* Implement DELETE
***/ 