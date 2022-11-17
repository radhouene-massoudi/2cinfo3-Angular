import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
listproduct:any;
  constructor(private s:ProductserviceService) { }

  ngOnInit(): void {
    this.s.fetchProducts().subscribe(
      (data)=>{
this.listproduct=data;
      },
     (err)=>{
console.log(err)
      }
    );
   
  }

}
