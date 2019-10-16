import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const getActualUserCritique = gql`
  query getActualUserCritique {
    actualUser {
      critiques {
        title
        comment
        pertinent
        nonPertinent
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetactualusercritiquesService {
  loading: boolean;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  getActualUserCritique() {
    return this.apollo.watchQuery<any>({
      query: getActualUserCritique
    }).valueChanges;
  }
}
