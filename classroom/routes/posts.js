const express =  require("express");
const router = express.Router();
//Post Route

//Index
router.get("/posts",(req,res)=>{
    res.send("Get for users");
});

//Posts
//Show-posts
router.get("/posts/:id",(req,res)=>{
    res.send("Get for posts id");
});
//Post-posts
router.post("/posts",(req,res)=>{
    res.send("Post for posts");
});
//Delete-posts
router.get("/posts/:id",(req,res)=>{
    res.send("Posts for  user id");
});

module.exports = router;