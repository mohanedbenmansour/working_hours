const Post = require("../models/post.model");

module.exports.addPost = (req, res, next) => {
  console.log(req.body);
  let newPost = Post({
    working_days: req.body,
  });
  newPost.save((err, post) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: post });
  });
};

module.exports.getPost = (req, res, next) => {
  Post.find({}, (err, posts) => {
    if (err) res.status(500).json({ ermsg: err });
    res.status(200).json({ msg: posts });
  });
};
