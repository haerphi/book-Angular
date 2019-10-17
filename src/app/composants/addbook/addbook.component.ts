import { Component, OnInit } from "@angular/core";
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";

@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.scss"]
})
export class AddbookComponent implements OnInit {
  addThisBook: any;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  newBookISBN(
    isbnOnly: string,
    formatOnly: string,
    stockOnly: string,
    langueOnly: string,
    couvertureOnly: string
  ): void {
    console.log(isbnOnly, formatOnly, stockOnly, langueOnly, couvertureOnly);
    this.addThisBook = gql`
      mutation addThisBook {
        addBookISBN(ISBN: "${isbnOnly}", stock: ${stockOnly}, langue: "${langueOnly}", format: "${formatOnly}", couverture: "${couvertureOnly}"){title}
      }
    `;
    this.apollo
      .mutate({
        mutation: this.addThisBook
      })
      .subscribe(({ data }) => {
        const anyObject: any = data;
        if (typeof anyObject.title != "undefined") {
          console.log("Livre ajouté !");
        }
      });
  }
}
