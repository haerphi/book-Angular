import { Component } from "@angular/core";

import { LoginService } from "./services/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public loginService: LoginService) {}
  title = "book-Angular";
  //vérifier le http cookie
  name = "Plow";

  ngOnInit() {
    this.loginService.isLogin();
  }
}
