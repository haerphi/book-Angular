import { Component } from "@angular/core";
import axios from "axios";
import { Router } from "@angular/router";

import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent {
  error: string = "";
  constructor(public router: Router, private loginService: LoginService) {}

  async login(email: string, pw: string) {
    //axios
    const rep = await axios.post(
      "https://book-api-simphi.herokuapp.com/get-token",
      {
        email: email,
        password: pw
      }
    );
    //vérification si un token a été reçu
    if (rep.data.token) {
      localStorage.setItem("token", `Bearer ${rep.data.token}`);
      //Est-ce que l'utilisateur est admin ?
      if (rep.data.admin) {
        localStorage.setItem("admin", "true");
      }
      //actualisation du statut login & admin
      this.loginService.isLogin();
      //redirection
      this.router.navigate([""]);
    } else {
      //aucun token reçu
      this.error = rep.data;
    }
  }
}
