import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./composants/login/login.component";
import { HomeComponent } from "./composants/home/home.component";
import { LibraryComponent } from "./composants/library/library.component";
import { BookComponent } from "./composants/book/book.component";
import { AddbookComponent } from "./composants/addbook/addbook.component";
import { UserComponent } from "./composants/user/user.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "library",
    component: LibraryComponent
  },
  {
    path: "addbook",
    component: AddbookComponent
  },
  {
    path: "library/:id",
    component: BookComponent
  },
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
