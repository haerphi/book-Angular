import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const getActualUserEmprunt = gql`
  query getActualUserEmprunt {
    actualUser {
      emprunts {
        book {
          title
        }
        date_location
        date_rendu
      }
    }
  }
`;
@Injectable({
  providedIn: "root"
})
export class GetactualuserempruntsService {
  loading: boolean;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  getActualUserEmprunt() {
    return this.apollo.watchQuery<any>({
      query: getActualUserEmprunt
    }).valueChanges;
  }
}
