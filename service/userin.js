rout=exp.Router()
//conn=mj("mongodb://localhost:27017/test")

// rout.get("/user",function(req,res){
//    conn.adtest.find(function(err,result){
//     res.send(result)
//    })

// })

///GET USER DATA
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
///ADD IMAGE
rout.post("/addimg",function(req,res){
   ob=req.body
   console.log(ob)
  
})

////ADD DATA
rout.post("/ins_cat",function(req,res){
    
    ob=req.body
  
    conn.adtest.find({uname:ob.uname},function(err,resu){
       
        if(resu.length==0){
            conn.adtest.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
        
                // console.log(result)
                 if (result.length==0)
                 iid=1
                 else{
                     iid=(result[0]._id)
                     iid++
     
                 }
             
               //  console.log(iid)
     
                 conn.adtest.insert({_id:iid,uname:ob.uname},(err,resu)=>{
                 if(err)
                 console.log(err)
                 else
                     res.send("inserted")
                 })
             
             })
        }else{
           
            res.send("already user")
        }
    })
     
    
    
    
    })

    // IMAGE 

    rout.post("/addimage",function(req,res){
        ob=req.body
        console.log(ob)
        conn.adtest.find().sort({_id:-1}).limit(1,function(err,result){
            id=result[0]._id
            conn.adtest.update({_id:id},{$set:{pimg:ob.imagee}})
            res.send("inserted")
           
        })
       
        
    })
///USAVE
    rout.post("/usave",function(req,res){
        obj=req.body
        console.log(obj)
       conn.adtest.update({_id:obj._id},{$set:{uname:obj.uname}})
       res.send("updated")
    })

    rout.post("/delete",function(req,res){
        var ob= req.body
        conn.adtest.remove({_id:ob.id})
        
        res.send("deleted")
    })


module.exports=rout;