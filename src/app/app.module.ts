import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./composants/login/login.component";
import { HomeComponent } from "./composants/home/home.component";
import { LibraryComponent } from "./composants/library/library.component";
import { UserComponent } from './composants/user/user.component';
import { AddbookComponent } from './composants/addbook/addbook.component';
import { BookComponent } from './composants/book/book.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, LibraryComponent, AddbookComponent, UserComponent, BookComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({
      uri: "http://book-api-simphi.herokuapp.com/graphql"
    });
    const authLink = new ApolloLink((operation, forward) => {
      const token = localStorage.getItem("token");

      operation.setContext({
        headers: {
          Authorization: token ? `${token}` : ""
        }
      });

      return forward(operation);
    });
    apollo.create({
      link: authLink.concat(http),
      cache: new InMemoryCache()
    });
  }
}
