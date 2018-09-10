import { Component, OnInit , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import {Headers,RequestOptions} from '@angular/http'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( @Inject(HttpClient) public obj,public act:ActivatedRoute) { }
  udata;name="100";
fungetuser(){
 

 
  this.obj.get("https://jsonplaceholder.typicode.com/posts").subscribe(udat=>{
  this.udata=udat
  
   
  })
}

funinsert(){
  alert("hiii")
 
  this.obj.post("userser/ins_cat").subscribe(ad=>{
    alert(ad)
    var imgins=<HTMLFormElement>document.getElementById("fm1")
    imgins.submit()
  })
  
}
/// SORTING//////
ab=true;bc="";
funsort(user){
  alert("hiii")
  this.bc=user
  this.ab=!this.ab
  
}

search={title:""};
//////// Filter or SEARCHING ////////


  ngOnInit() {
    this.fungetuser()

    var arr=document.URL.split("?")
     if(arr.length>1){
      this.act.params.subscribe(pr=>{
      
      var iname=arr[1].split("=")
      var imgn=iname[1]
     
        if(imgn!="0"){
          var img={imagee:imgn}
          this.obj.post("userser/addimage",img).subscribe(cb=>{
            alert(cb)
          })
         
        }else{
         alert("please select jpg or png file")
        }
    })
  }
    
  }

}
