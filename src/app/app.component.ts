import { Component } from "@angular/core";

import { LoginService } from "./services/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  constructor(private loginService: LoginService) {}
  title = "book-Angular";
  //vérifier le http cookie
  name = "Plow";

  ngOnInit() {
    this.loginService.isLogin();
  }
}
