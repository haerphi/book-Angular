import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.sass"]
})
export class AddbookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newBookISBN(
    isbnOnly: string,
    formatOnly: string,
    stockOnly: string,
    langueOnly: string,
    couvertureOnly: string
  ): void {
    console.log(isbnOnly, formatOnly, stockOnly, langueOnly, couvertureOnly);
  }
}
