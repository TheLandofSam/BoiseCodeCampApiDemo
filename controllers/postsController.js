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

}

exports.create = (req, res, next) => {

}

exports.remove = (req, res, next) => {

}