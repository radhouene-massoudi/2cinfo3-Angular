import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  constructor(private s:ProductserviceService) { }

  ngOnInit(): void {
    this.s.getProductById(2).subscribe(
      (d)=>{
        console.log(d);
      }
    )
  }

}
