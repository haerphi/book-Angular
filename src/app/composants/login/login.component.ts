import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  async login(email: string, pw: string) {
    //axios
    let rep = await axios.post(
      "https://book-api-simphi.herokuapp.com/get-token",
      {
        email: email,
        password: pw
      }
    );
    localStorage.setItem("token", `Bearer ${rep.data.token}`);
    //selon la rep on fait des trucs
    this.router.navigate([""]);
  }
}
