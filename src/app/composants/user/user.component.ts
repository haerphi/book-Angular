import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { GetactualuserService } from "src/app/services/getactualuser.service";
import { GetactualuseravisService } from "src/app/services/getactualuseravis.service";
import { GetactualusercritiquesService } from "src/app/services/getactualusercritiques.service";
import { GetactualuserempruntsService } from "src/app/services/getactualuseremprunts.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public user: object;
  public userAvis: object;
  public userCritique: object;
  public userEmprunt: object;
  constructor(
    public actualuserservice: GetactualuserService,
    public actualuseravisservice: GetactualuseravisService,
    public actualusercritiqueservice: GetactualusercritiquesService,
    public actualuserempruntservice: GetactualuserempruntsService,
    public router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    //redirige en cas de fin de token
    if (!this.loginService.login) {
      this.router.navigate([""]);
    }
    // Import user name
    this.actualuserservice.getActualUser().subscribe(res => {
      this.user = res.data.actualUser.name;
    });
    // Import user avis
    this.actualuseravisservice.getActualUserAvis().subscribe(res => {
      this.userAvis = res.data.actualUser.avis;
    });
    // Import user critiques
    this.actualusercritiqueservice.getActualUserCritique().subscribe(res => {
      this.userCritique = res.data.actualUser.critiques;
    });
    // Import user emprunts
    this.actualuserempruntservice.getActualUserEmprunt().subscribe(res => {
      this.userEmprunt = res.data.actualUser.emprunts;
    });
  }
}
