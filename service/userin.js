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


rout.post("/ins_cat",function(req,res){
    
    ob=req.body
   console.log(ob)
   
    conn.adtest.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
    
        console.log(result)
            if (result.length==0)
            var iid=0
            else
                iid=result[0]._id
               
                
            
            iid++
       
        console.log(iid)
        conn.adtest.insert({_id:iid,uname:ob.uname},(err,resu)=>{
           if(err)
           console.log(err)
           else
            res.send("0")
        })
      
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


module.exports=rout;