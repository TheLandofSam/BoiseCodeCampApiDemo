var server = require("./app");
let postsController = require("./controllers/postsController");

server.get('/', function(req, res, next){
    res.send('Hello Kitties!');
});
//get all
server.get('/api/v1/posts', postsController.index);
//get read one
server.get('api/v1/posts/:id', postsController.view);
//get update
server.put('/api/v1/posts/:id', postsController.update);
//create
server.post('/api/v1/posts', postsController.create);
//remove
server.delete('/api/v1/posts:id', postsController.remove);


/*** TODO
* Add a controller
* Implement GET/READ ALL
* Implement GET/READ ONE
* Implement PUT/UPDATE
* Implement CREATE/POST
* Implement DELETE
***/