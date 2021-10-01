import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';


cards=[
  {
  plan:"FREE",
  price:0,
  user:"Single User",
  storage:5,
  publicProjects:true,
  communityAccess:true,
  privateProjects:false,
  phoneSupport:false,
  freeSubdomain:false,
  monthlyReport:false
},
{
  plan:"PLUS",
  price:9,
  user:"5 Users",
  storage:50,
  publicProjects:true,
  communityAccess:true,
  privateProjects:true,
  phoneSupport:true,
  freeSubdomain:true,
  monthlyReport:false
},
{
  plan:"PRO",
  price:49,
  user:"Unlimited Users",
  storage:150,
  publicProjects:true,
  communityAccess:true,
  privateProjects:true,
  phoneSupport:true,
  freeSubdomain:true,
  monthlyReport:true
}
]

}