import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  private urlParams: any;

  constructor(private activeRoute: ActivatedRoute) {

    window.location.hash = '';

    // URLパラメータ取得
    this.activeRoute.fragment
      .pipe(map(fragment => fragment))
      .subscribe(fragment => {
        console.log(fragment);
      });
  }


  async ngOnInit() {

  }

}
