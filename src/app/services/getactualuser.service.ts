import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const getActualUser = gql`
  query getActualUser {
    actualUser {
      name
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetactualuserService {
  loading: boolean;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  getActualUser() {
    return this.apollo.watchQuery<any>({
      query: getActualUser
    }).valueChanges;
  }
}
