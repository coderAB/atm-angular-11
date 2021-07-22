import { GlobalService } from './global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise1';
  isActive = true;

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getCardDetails();
  }

}
