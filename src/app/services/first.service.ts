import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
tab=['1','2','3']
  constructor() { }
  addElementToTab(t:any){
    this.tab.push(t)
  }
  showTab(){
    console.log(this.tab)
  }
}
