import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private s:ProductserviceService) { }

  ngOnInit(): void {
    
  }
addProduit(f:any){
this.s.addProduct(f).subscribe(
  ()=>{
    console.log('added')
  }
)
}
}
