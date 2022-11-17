import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  fetchProducts(){
  return  this.http.get('http://localhost:3000/product')
  }
  getProductById(id:any){

return  this.http.get('http://localhost:3000/product/'+id)
  }
}
