import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {

  constructor(private params : ActivatedRoute, private service: OrderDetailsService){}
  menuData: any;
  getMenuId:any;
  ngOnInit() : void{
    this.getMenuId = this.params.snapshot.paramMap.get('id')
    console.log(this.getMenuId);
    if(this.getMenuId){
      this.menuData = this.service.foodDetails.filter((val)=>{
          return val.id == this.getMenuId
      })
    }
  }
}
