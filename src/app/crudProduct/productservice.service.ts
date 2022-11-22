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
  addProduct(data:any){
return this.http.post('http://localhost:3000/product/',data)
  }
  updateProduct(data:any,id:any){
    return this.http.put('http://localhost:3000/product/'+id,data)
      }
      removeProduct(id:any){
return this.http.delete('http://localhost:3000/product/'+id)
      }
}
