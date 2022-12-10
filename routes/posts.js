const express =require("express");
const res= require("express/lib/response")
const router= express.Router()
const post= require("../models/post")

router.get("/",async(req,res)=>{
    try{
    const sl= await post.find();
    res.json(sl)
    }catch(err){
        res.json({message:err});
    }
});

router.get("/specific",(req,res)=>{
    res.send("Inside specific post")

})
router.post("/",async(req,res)=>{
    const sl=  new post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const  savePost =await sl.save();
        res.json(savePost);
        

    }catch(err){
        res.json({message:err});

    }
       
     console.log(req.body)
});
//get data for a specific Id
router.get("/:postId",async (req,res)=>{
    try{
        const sl= await post.findById(req.params.postId);
        res.json(sl);

    }catch(err){
        res.json({message:err})

    }
});

//update a value
router.patch("/:postId",async (req,res)=>{
    try {
        const ud=await post.updateOne(
            {_id:req.params.postId},
            {
                $set:{
                    title:req.body.title,
                    description:req.body.description,
                },
            }
    
        );
        res.json(ud)

    } catch(err){
        res.json({message:err})

    }
});

//delete post
router.delete("/:postId",async (req,res)=>{
    try{
        const remove=await post.remove({_id:req.params.postId})
        res.json(remove)

    }catch(err){
        res.json({message:err})
    }
})

module.exports=router;