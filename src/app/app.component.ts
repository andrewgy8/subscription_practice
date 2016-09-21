import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  length: number;
  name: string;

  doCheckLengthOfName(name){
    console.log(name)
    this.length = name.length
  }
}
