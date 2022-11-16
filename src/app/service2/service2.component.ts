import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor(private s:FirstService) { }

  ngOnInit(): void {
    this.s.addElementToTab('2cinfo3')
    this.s.showTab();
  }

}
