import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.sass"]
})
export class BookComponent implements OnInit, OnDestroy {
  loading: boolean;
  array = [];
  critiques = [];
  getThatbook;

  private querySubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.getThatbook = gql`
query getThatbook {
  book (id: ${id}){ISBN
    title
    subTitle
    editor
    format
    langue
    couverture
    stock
    authors{id name}
    critiques{title comment evaluation user{name} pertinent nonPertinent}}
}
`;
  }
  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: this.getThatbook
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.array.push(data);
        this.critiques = { ...this.array[0].book };

        delete this.critiques["ISBN"],
          delete this.critiques["title"],
          delete this.critiques["subTitle"],
          delete this.critiques["editor"],
          delete this.critiques["format"],
          delete this.critiques["langue"],
          delete this.critiques["couverture"],
          delete this.critiques["stock"],
          delete this.critiques["authors"];

        this.critiques["hide"] = "true";
      });
  }

  toggle(hide) {
    this.critiques["hide"] = !this.critiques["hide"];
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
