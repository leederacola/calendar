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


  initDate(startDate){
    let str = this.startDate;
    let d = parseInt(str.substring(8,10));
    let m = parseInt(str.substring(5,7));
    let y= parseInt(str.substring(0,4));
    console.log("d/m/y = " + d +" "+" " + m +" " +y );

    console.log("Date object this.date: " + this.date);
    this.date = new Date(d,m,y);
  }


  go(){
    this.startGrid="3/3"; // set start
  }

   



  constructor() { }




  ngOnInit() {
  }

}
