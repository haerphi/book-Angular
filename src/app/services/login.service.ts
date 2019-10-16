import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  login: boolean;
  admin: boolean;
  constructor() {
    this.login = false;
    this.admin = false;
  }

  isLogin(): void {
    if (localStorage.getItem("token")) {
      console.log("hi !");
      this.login = true;
    }
    if (localStorage.getItem("admin")) {
      if (localStorage.getItem("admin") === "true") {
        console.log("Hi admin !");
        this.admin = true;
      }
    }
  }

  logout(): void {
    console.log("Logout");
    this.admin = false;
    this.login = false;
    localStorage.clear();
  }
}
