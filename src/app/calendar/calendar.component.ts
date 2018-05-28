import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  numberDays: number;
  startDate: string;
  countryCode: string;
  startGrid: string;
  date = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



  loopCt(i: number) {
     return new Array(this.numberDays);
  }


  initDate(startDate){
    let str = this.startDate;
    let m = parseInt(str.substring(8,10));
    let d = parseInt(str.substring(5,7))-1;
    let y= parseInt(str.substring(0,4));
    console.log("d/m/y = " + d +" "+" " + m +" " + y );
    this.date = new Date(y,d,m);
    console.log("Date object this.date: " + this.date);
    let n = this.date.getDay() + 1; 
    this.startGrid = n + "/" + n;
    console.log(this.startGrid);
  }



  go() {
    // create a new div element 
    var newDiv = document.createElement("div");
    newDiv.className = "";
    // and give it some content 
    var newContent = document.createTextNode("#");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }


  constructor() { }




  ngOnInit() {
  }

}
