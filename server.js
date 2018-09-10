exp=require("express")
app=exp()
bp=require("body-parser")
fil=require("express-fileupload")

app.use(fil())
app.use(bp.json())
app.listen(3000)
console.log("port 3000 started")



mj=require("mongojs")

conn=mj("mongodb://localhost:27017/test")
// conn=mj("mongodb://pathakabhishek:1.jaanabhi@ds021741.mlab.com:21741/demo")
use=require("./service/userin")

app.use("/userser",use)



app.post("/uploads",function(req,res){
    iname=req.files.f1.name
    iref=req.files.f1
   

    if(req.files.f1.mimetype=="image/jpeg" || req.files.f1.mimetype=="image/PNG"){
       var dt = new Date()
    dt=dt/1000
    iname=("img"+parseInt(dt)+"_"+iname)
    //iref.mv("images/"+iname)
    //iref.mv("../src/assets/images/"+iname)
    res.redirect("http://localhost:4200/admin?res="+iname)
      
       
    }else{
        res.redirect("http://localhost:4200/admin?res=0")
       
       
    }

}) 

app.get("/",function(req,res){
    /*
     * This pattern does NOT work!
     */
    //res.send(ee)

    rr
    try {
      doSomeAsynchronousOperation((err) => {
        if (err) {
          throw (err);
        }
        /* continue as normal */
      });
    } catch (ex) {
      callback(ex);
    }
  })

