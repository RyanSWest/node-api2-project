const express = require("express");
const Posts = require("../db.js");

const router = express.Router();

router.get("/", (req, res) => {
 Posts.find(req.query)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({
        message: "error retrieving thePosts"
      });
    });
});

router.get('/:id', (req,res)=> {
   Posts.findById(req.params.id)
    .then(comment => {
        if(comment){
        res.status(200).json(comment);
    }else{
        res.status(404).json
    }
    })
})

router.post('/', (req,res)=> {
  Posts.insert(req.body)
  .then(post=> {
    res.status(201).json(post)
  })
  .catch(err=>{
    res.status(500).json({
      message:'Error adding the post'
    });
  });
;
})

router.get('/:id/comments',(req,res)=> {
  Posts.findPostComments(req.params.id)
  .then(comment=> {
    res.status(200).json(comment)
  })
  .catch(err=> {
    res.status(500).json({
      message:'error retrieving the comment.'
    })
  })
})

router.get('/:id/comments/:id', (req,res)=> {
  Posts.findCommentById(req.params.id)
  .then(comment => {
    res.status(200).json(comment)
  })
  .catch(err=> {
    message: 'error retrieving the comment'
  })
})


router.post('/:id/comments', (req,res)=> {
  Posts.insertComment(req.body)
  .then(comment => {
    res.status(201).json(comment)
  })
  .catch(err=> {
    res.status(500).json
  })
})

router.delete('/:id',(req,res)=> {
  Posts.remove(req.params.id)
  .then(count=> {
    if(count>0){
      res.status(200).json({message: 'the post has been nuked'})
    }else{
      res.status(404).json({message: 'The post could not be found.'})
    }
  })
  .catch(err=> {
    res.status(500).json({
      message: 'Error removing the post'
    })
  })
})

router.put('/:id', (req,res)=> {
  const changes = req.body;
  Posts.update(req.params.id, changes)
  .then(post=> {
    if(post){
      res.status(200).json(post);
    }else{
      res.status(404).json({message: 'Post could not be found'})
    }
  })
  .catch(err=> {
    res.status(500).json({
      message: 'Error updating the Post.'
    })
  })
})



module.exports = router;