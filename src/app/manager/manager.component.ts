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

  txt1=""
  funcat_insert(){
    alert(this.txt1)
    var ob={uname:this.txt1}
    this.obj.post("userser/ins_cat",ob).subscribe(cb=>{
     
    })
   
    }
  ngOnInit() {
  }

}
