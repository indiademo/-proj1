import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import{HttpModule} from '@angular/http'
import { OrderModule }  from 'ngx-order-pipe'
import { FilterPipeModule } from 'ngx-filter-pipe'

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';

var rout=[{
path:"admin",component:AdminComponent
},{
path:"manager",component:ManagerComponent
},{
path:"user",component:UserComponent
}]

var rr= RouterModule.forRoot(rout)
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,rr,HttpClientModule,FormsModule,HttpModule,OrderModule,FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
