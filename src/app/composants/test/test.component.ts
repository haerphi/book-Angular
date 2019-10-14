import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.sass"]
})
export class TestComponent implements OnInit {
  test: string;
  name: string;
  nbr: number;
  interval: number;
  i: number;
  constructor() {
    this.test = "hello world";
    this.name = "Plow";
    this.i = 10;
  }

  ngOnInit() {
    setTimeout(() => {
      console.log("plopo");
    }, 10000);
  }
}
