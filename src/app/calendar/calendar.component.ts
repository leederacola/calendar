import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  numberDays: number;
  remainingDays: number=12;
  startDate: string;
  countryCode: string;
  startGrid: string;
  date = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dateArray: Array<Date> = [];

  currentDay:number;


      createCalendar(){
        while(this.numberDays > 0){

          let m = this.date.getMonth();
          let dow = this.date.getDay();
          let d = this.date.getDate();
          this.currentDay=d;
          let remainingMonth = (this.monthDays(m)-d); // divs to create for current month
          this.createMonthTitle();
          this.createDaysHeader();
          this.createMonthGrid(remainingMonth,dow);

        }

        

        }

        createMonthTitle(){
          let m = this.date.getMonth();
          var monthHeader = document.createElement("h1");
          var t = document.createTextNode(this.months[m]);
          monthHeader.appendChild(t);
          document.getElementById("start").appendChild(monthHeader);
        }
        
        createDaysHeader(){
          var grid = document.createElement("div");
          grid.classList.add("grid-container");
          //days of week heading
          var days = new Array("SU","MO","TU","WE","TH","FR","SA");
          //make 7 divs sun-sat
          for(let d of days){
            var div = document.createElement("div");
            var t = document.createTextNode(d);
            div.appendChild(t);
            grid.appendChild(div);
            document.getElementById("start").appendChild(grid);   
                             
          }
        }

        createMonthGrid(m:any, dow:any){
          var grid = document.createElement("div");
          grid.classList.add("grid-container");
          //start div
          var div = document.createElement("div");
          var t = document.createTextNode("#");
          //div.classList.add("item"+s);
          let str = (dow+1)+"/"+(dow+1);
          console.log(dow);
          div.setAttribute("style", "grid-column: "+ str);
          div.appendChild(t);
          grid.appendChild(div);
          for(let i = 0; i < m; i++ ){
            var div = document.createElement("div");
            var t = document.createTextNode("#");
            div.appendChild(t);
            grid.appendChild(div);    
            document.getElementById("start").appendChild(grid);
            this.numberDays --;
            console.log(this.numberDays);
          }
          this.date.getDay() + 1;
          
          
          console.log("set date "+ this.date.getDate() );
        }



   
      
        

        










  loopCt(i: number) {
    return new Array(this.numberDays);
  }

  monthDays(i:number){
    if(i == 1){
      return 28;
    }  
    if(i == 3 || i == 5 || i == 8 || i == 10){
      return 30;
    }
    else{
      return 31;
    }
  }


  initDate(startDate) {
    let str = this.startDate;
    let m = parseInt(str.substring(8, 10));
    let d = parseInt(str.substring(5, 7)) - 1;
    let y = parseInt(str.substring(0, 4));
    console.log("d/m/y = " + d + " " + " " + m + " " + y);
    this.date = new Date(y, d, m);
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
