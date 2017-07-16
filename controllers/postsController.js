let db = require('../models');
let Post = db.Post;

exports.index = (req, res, next) => {
  //this is the get all, has a promise...
  Post.findAll()
  .then(function(posts){
    res.send(posts);
  }
  )
}
//this is an example of the above promise if it was written with async08, which is a node update:
// exports.index = async (req, res, next) => {
//     await res.send(Post.findAll());
// } 


exports.view = (req, res, next) => {
  Post.findOne({
    where:{
      id: req.params.id
    }
})
  .then(function(posts){
    res.send(post);
  })
}

exports.update = (req, res, next) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(post){
    post.update(req.body);
    post.send(post);
  })
  
}

exports.create = (req, res, next) => {
  Post.create(req.body)
  .then(function(post){
    res.send(post);
  })
}

exports.remove = (req, res, next) => {
  Post.findOne({
    where: {
      id:req.params.id
    }

  })
  .then(function(post){
    post.destroy();
    res.send("Post deleted");
  })
}