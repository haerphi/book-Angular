import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const getBooks = gql`
  query getBooks {
    books {
      id
      ISBN
      title
      subTitle
      editor
      format
      langue
      couverture
      stock
      authors {
        id
        name
      }
      critiques {
        title
        comment
        evaluation
        user {
          name
        }
        pertinent
        nonPertinent
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetbooksService {
  loading: boolean;
  array = [];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  getbook() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: getBooks
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        for (let i = 0; i < data.books.length; i++) {
          this.array.push(data.books[i]);
        }
      });
  }
}
