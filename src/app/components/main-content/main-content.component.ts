import { Component, OnInit } from '@angular/core';
import { MainContentContext } from 'src/app/contexts/main-content-context';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }
  context: MainContentContext;
  ngOnInit() {
    if (!this.context) {
      this.context = new MainContentContext();
    }

    // Load list account

  }

}
