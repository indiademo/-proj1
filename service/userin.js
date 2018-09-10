rout=exp.Router()
//conn=mj("mongodb://localhost:27017/test")

// rout.get("/user",function(req,res){
//    conn.adtest.find(function(err,result){
//     res.send(result)
//    })

// })

rout.get('/users', function(req, res, next) {
    // A database query that will get us any users from the collection
    conn.adtest.find(function(error, users) {
       if(error)return next(error);
       if (!users) return next(new Error('No users found.'))
       // Do something, if fail the return next(error);
       res.send(users)
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