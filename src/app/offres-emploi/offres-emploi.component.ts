import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  offres=[
    {reference: 1, title: "T-shirt 1", company: 'test', etat: true},
    {reference: 2, title: "T-shirt 1", company: 'talent', etat: false},
    {reference: 3, title: "T-shirt 1", company: 'sofrecom', etat: false},
    {reference: 4, title: "T-shirt 1", company: 'esprit', etat: true},
     ]
  
     c=0; 
     etatbutton=false;
     search="";
     lengthoftable=this.offres.length;
  constructor() { }

  ngOnInit(): void {
  }
bilan(){
  this.c=0;
  for(let i=0;i<this.offres.length;i++){
if(this.offres[i].etat==true){
  this.c++;
}
  }
  this.etatbutton=true
}
}
