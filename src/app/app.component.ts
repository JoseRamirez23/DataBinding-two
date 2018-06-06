import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`
  <p>
  The first number:
  {{numberOne}} 
  <br>
  The second number:
  {{numberTwo}} 
  </p>

  <p>
  The sum of both numbers:
  {{numberThree}}
  </p>

  The largest of the two number:
  {{result}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  
  numberOne: number = 5;
  numberTwo: number = 7;

  numberThree = this.numberOne + this.numberTwo;

result: number =this.numberOne >= this.numberTwo ? this.numberOne:this.numberTwo;

}
