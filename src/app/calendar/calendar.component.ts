import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  remainingDays: number;
  startDate: string;
  countryCode: string;
  date = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  numberDays: number;

  makeTheCalendar(){
    this.parseInputDate();
    let d: Date = new Date(); 
    d = this.date; // initial user input
    let remaining = this.numberDays;
    let m = -1;

    while( remaining > 0 ){
      console.log("start date: " + d.getFullYear());
      console.log("remaining: " + remaining);

      let div = document.createElement("div");
      let text = document.createTextNode(d.getDate().toString()); // add date to div
      div.appendChild(text);

      let mGrid = document.createElement("div");
      mGrid.classList.add("grid-container");
      //if month changes, make month h1 and new weekly header
      if( d.getMonth() != m ){
        m = d.getMonth();
        //make header 
        let header = document.createElement("h1");
        let text = document.createTextNode(this.months[d.getMonth()] + " - " + d.getFullYear());
        header.appendChild(text);
        document.getElementById("start").appendChild(header);
        
        // make day of week heading
        this.createDaysHeader();
        //make css grid
        let grid = document.createElement("div");
        grid.classList.add("grid-container");
        document.getElementById("start").appendChild(grid);
        // new month = new start location
        let str = (d.getDay() + 1) + "/" + (d.getDay() + 1); //css grid positioning grid-column: "3/3" = start day tuesday
        div.setAttribute("style", "grid-column: " + str);       
      }//end new month if

      //check for weekend
      if(d.getDay() == 0 || d.getDay() == 6){
        div.classList.add("we"); 
      }
      else{
        div.classList.add("wd");
      }
      //finally add div
      var elems = document.querySelectorAll(".grid-container");
      let len = elems.length;
      let lastelement = elems[len-1];
      lastelement.appendChild(div);

      // loop book keeping
      d.setDate( d.getDate() + 1 ); //increment date
      remaining --; 
      console.log("end date: " + d);
      console.log("remaining: " + remaining);
    } //end while
  }

  createDaysHeader() {
    var grid = document.createElement("div");
    grid.classList.add("grid-container");
    //days of week heading
    var days = new Array("SU", "MO", "TU", "WE", "TH", "FR", "SA");
    //make 7 divs sun-sat
    for (let d of days) {
      var div = document.createElement("div");
      div.classList.add("header");
      var t = document.createTextNode(d);
      div.appendChild(t);
      grid.appendChild(div);
      document.getElementById("start").appendChild(grid);
    }
  }

  parseInputDate() {
    let str = this.startDate;
    let m = parseInt(str.substring(8, 10));
    let d = parseInt(str.substring(5, 7)) - 1;
    let y = parseInt(str.substring(0, 4));
    this.date = new Date(y, d, m);
    console.log("input (start date): " + this.startDate );
    console.log("initDate(): " + this.date);
  }

  constructor() { }

  ngOnInit() {
  }

}
