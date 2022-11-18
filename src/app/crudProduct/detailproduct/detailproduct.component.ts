import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
product:any;
idf:any;
  constructor(private s:ProductserviceService,private acr:ActivatedRoute) { }

  ngOnInit(): void {
this.idf=this.acr.snapshot.params['id'];
    this.s.getProductById(this.idf).subscribe(
      (d)=>{
        //console.log(d);
        this.product=d;
      }
    )
  }

}
