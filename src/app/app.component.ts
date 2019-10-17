import { Component } from "@angular/core";

import { LoginService } from "./services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public loginService: LoginService, public router: Router) {}
  title = "book-Angular";
  //vérifier le http cookie
  name = "Plow";

  ngOnInit() {
    this.loginService.isLogin();
  }
}
