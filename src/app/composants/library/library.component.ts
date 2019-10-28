import { Component } from "@angular/core";
import { GetbooksService } from "../../services/getbooks.service";

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.scss"]
})
export class LibraryComponent {
  constructor(public booksservice: GetbooksService) {}
  ngOnInit() {
    if (this.booksservice.array.length < 1) {
      this.booksservice.getbook();
    }
  }
}
