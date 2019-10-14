import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  constructor() {}
  title = "book-Angular";
  //vérifier le http cookie
  isLogin = false;
  name = "Plow";

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.isLogin = true;
    }
  }

  logout() {
    console.log("logout");
    this.isLogin = false;
    localStorage.clear();
  }

  login() {
    console.log("login");
    this.isLogin = true;
  }
}
