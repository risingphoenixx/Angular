import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input() pricelist={
    plan:"FREE",
    price:0,
    user:"Single User",
    storage:5,
    publicProjects:true,
    communityAccess:true,
    privateProjects:false,
    phoneSupport:false,
    freeSubdomain:true,
    monthlyReport:false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
