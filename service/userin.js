rout=exp.Router()
//conn=mj("mongodb://localhost:27017/test")

rout.get("/user",function(req,res){
   conn.adtest.find(function(err,result){
    res.send(result)
   })

})

rout.post("/adduser",function(req,res){
    conn.adtest.insert({name:"abhi"})
    console.log("added")
})

rout.post("/addimg",function(req,res){
   ob=req.body
   console.log(ob)
  
})



module.exports=rout;