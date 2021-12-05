import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doLogout(event) {
    // TODO logout
    const loginUrl: string = `${environment.cognito_domain}/login?response_type=${environment.cognito_responseType}&client_id=${environment.cognito_client_id}&redirect_uri=${environment.cognito_callback_uri}`;
    window.location.assign(loginUrl);
  }

}
