import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
idtoupdateproduct:any;
product:any;
title:any;
price:any;
like:any;
quantity:any;
  constructor(private s: ProductserviceService,
    private acr: ActivatedRoute) { }

  ngOnInit(): void {
    this.idtoupdateproduct=this.acr.snapshot.params['idt'];
    this.s.getProductById(this.idtoupdateproduct).subscribe(
      (d)=>{
this.product=d;
this.title=this.product.title;
this.like=this.product.like;
this.price=this.product.price;
this.quantity=this.product.quantity;
      }
    )
  }
  updateProduit(f: any) {
    this.s.updateProduct(f,this.idtoupdateproduct).subscribe();
  }
}
