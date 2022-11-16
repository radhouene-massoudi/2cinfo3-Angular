import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor(private s:FirstService) { }

  ngOnInit(): void {
    this.s.addElementToTab('esprit');
    this.s.showTab();
  }

}
