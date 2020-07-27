import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  user: any;
  
  constructor(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
