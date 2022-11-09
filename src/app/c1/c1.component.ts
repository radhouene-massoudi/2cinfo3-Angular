import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
klass="2cinfo3";
color!:String;
Qantity=2;
listProdcut=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]

  constructor() {
    console.log('cons')
   }

  ngOnInit(): void {
    console.log('ngonint')
  }
showMsg(){
  console.log('bonjour');
}
getColor(){
if(this.Qantity>0){
  this.color='green'
}else{
  this.color='red'
}
}

getColor1(){
  if(this.Qantity>0){
    return 'green'
  }return 'red'
  }
  IncreaseLike(p:any){
//console.log(p);

//let i=this.listProdcut.indexOf(p);
//if(i!=-1){
this.listProdcut[p].like++;
//}

  }
  decreaseQantity(index:any){
  this.listProdcut[index].quantity--;
  }
}
