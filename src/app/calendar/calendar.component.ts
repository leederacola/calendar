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
  startGrid: string;
  date = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dateArray: Array<Date> = [];
  numberDays: number;

  makeTheCalendar(){
    let d: Date = new Date(); 
    d = this.date; // initial user input
    let remaining = this.numberDays;
    let m = -1;

    while( remaining > 0 ){
      console.log("start date: " + d.getFullYear());
      console.log("remaining: " + remaining);

      let div = document.createElement("div");
      let text = document.createTextNode(d.getDate().toString()); // add date to div
      
      if( d.getMonth() != m ){
        m = d.getMonth();
        //make header 
        let header = document.createElement("h1");
        let text = document.createTextNode(this.months[d.getMonth()]);
        header.appendChild(text);
        document.getElementById("start").appendChild(header);
        //make css grid
        let grid = document.createElement("div");
        grid.classList.add("grid-container");
        document.getElementById("start").appendChild(grid);
        // make day of week heading
        this.createDaysHeader();

        // new month = new start location
        let str = (d.getDay() + 1) + "/" + (d.getDay() + 1); //css grid positioning grid-column: "3/3" = start day tuesday
        div.setAttribute("style", "grid-column: " + str);       
      }//end new month if

      //check for weekend
      if(d.getDay() == 0 || d.getDay() == 6){
        div.classList.add("we"); 
      }
      //finally add div
      document.getElementById("start").appendChild(div);

      // book keeping
      d.setDate( d.getDate() + 1 ); //increment date
      remaining --; 
      console.log("end date: " + d);
      console.log("remaining: " + remaining);
    } //end while
  }
 



  createCalendar() {
    let m = this.date.getMonth();
    let dow = this.date.getDay();
    let d = this.date.getDate();

    let remainingMonth = (this.monthDays(m) - (d)); // divs to create for current month
    this.createMonthTitle();
    this.createDaysHeader();
    this.createMonthGrid(m,d,dow);
    console.log(this.date);
  }


  createMonthGrid(m:any, d:any, dow:any) {
    let monthLoop = this.monthDays(m) - d; //number of divs rendered in month
    console.log(monthLoop);
    var grid = document.createElement("div");
    grid.classList.add("grid-container");
    for(let i = 0; i < monthLoop; i++ ){
 
    //start div
    var div = document.createElement("div");
    var t = document.createTextNode(this.date.getDate().toString());
    if (dow == 0 || dow == 6) {
      div.classList.add("we");
    }
    let str = (dow + 1) + "/" + (dow + 1); //css grid positioning
    div.setAttribute("style", "grid-column: " + str);
    div.appendChild(t);
    grid.appendChild(div);
    this.date.setDate(this.date.getDate() + 1); //advance the date
  }


    // for(let i = 0; i < m; i++ ){
    //   var div = document.createElement("div");
    //   var t = document.createTextNode(sDate);
    //   div.appendChild(t);
    //   grid.appendChild(div);    
    //   document.getElementById("start").appendChild(grid);
    //   sDate++;                 
    // }   
  }


  createMonthTitle() {
    let m = this.date.getMonth();
    var monthHeader = document.createElement("h1");
    var t = document.createTextNode(this.months[m]);
    monthHeader.appendChild(t);
    document.getElementById("start").appendChild(monthHeader);
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



  loopCt(i: number) {
    return new Array(this.numberDays);
  }

  monthDays(i: number) {
    if (i == 1) {
      return 28;
    }
    if (i == 3 || i == 5 || i == 8 || i == 10) {
      return 30;
    }
    else {
      return 31;
    }
  }


  initDate() {
    let str = this.startDate;
    let m = parseInt(str.substring(8, 10));
    let d = parseInt(str.substring(5, 7)) - 1;
    let y = parseInt(str.substring(0, 4));
    //console.log("d/m/y = " + d + " " + " " + m + " " + y);
    this.date = new Date(y, d, m);
    //console.log("Date object this.date: " + this.date);
    let n = this.date.getDay() + 1;
    this.startGrid = n + "/" + n;
    console.log("input (start date): " + this.startDate );
    console.log("initDate(): " + this.date);
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
