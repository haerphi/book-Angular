import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "book-Angular";
  //vérifier le http cookie
  isLogin = true;
  name = "Plow";

  logout() {
    console.log("logout");
    this.isLogin = false;
  }

  login() {
    console.log("login");
    this.isLogin = true;
  }
}
