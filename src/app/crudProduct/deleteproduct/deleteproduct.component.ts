import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
id:any;
  constructor(private s:ProductserviceService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.s.removeProduct(this.id).subscribe(
      ()=>{
        console.log('removed');
      }
    )
  }

}
