import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
product:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  showData(t:any){
console.log(t)
  }
  showForm(t:any){
    console.log(t.value);
  }
  addProduct(p:any){
this.product.push(p)
  }
}
