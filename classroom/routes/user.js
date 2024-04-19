const express = require("express");
const router = express.Router();


//User Route

//Index
router.get("/users",(req,res)=>{
    res.send("Get for users");
});

//Show-users
router.get("/users/:id",(req,res)=>{
    res.send("Get for user id");
});
//Post-users
router.post("/users",(req,res)=>{
    res.send("Post for users");
});
//Delete-users
router.get("/users/:id",(req,res)=>{
    res.send("Delete for  user id");
});


module.exports = router;