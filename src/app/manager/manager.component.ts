import { Component, OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http'
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(@Inject(Http) public obj) { }

  valied=1;txt1=""; tmp=0;t1="";
  funcat_insert(form1){
    if(form1.valid){
    
      var ob={uname:this.txt1}
      this.obj.post("userser/ins_cat",ob).subscribe(cb=>{
      alert(cb._body)
      this.getudata();
      })
    }else{
    this.valied=0
    }
  }


  udata;
  getudata(){
    this.obj.get("userser/users").subscribe(ocb=>{
      this.udata=JSON.parse(ocb._body)
     
    })
  }
  ///////////CANCEL ///
  funccancel(){
    this.tmp=0;
  }
  ///////
  //////////////UPDATE 
  funucatupdate(ob){
    //this.gloobj={subcat:ob,catid:cid}
     this.tmp=ob._id;
     this.t1=ob.uname;
    
     //alert(this.t1)
  
  }
  ////////////////SAVE///////////

  funcatsave(){
      
    var udata={_id:this.tmp,uname:this.t1}
   
    this.obj.post("userser/usave",udata).subscribe(caback=>{
      this.getudata();
      this.tmp=0;
    })
   
  }
  //////DELETE
  funucdel(dl){
    var dd={id:dl}
    this.obj.post("userser/delete",dd).subscribe(caback11=>{
     //alert(caback11._body)
      this.getudata();
      this.tmp=0;
    })
    
  }
  ngOnInit() {
    this.getudata();
  }

}
