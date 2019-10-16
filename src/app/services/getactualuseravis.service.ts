import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const getActualUserAvis = gql`
  query getActualUserAvis {
    actualUser {
      avis {
        pertinent
        critique {
          title
          book {
            title
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetactualuseravisService {
  loading: boolean;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  getActualUserAvis() {
    return this.apollo.watchQuery<any>({
      query: getActualUserAvis
    }).valueChanges;
  }
}
