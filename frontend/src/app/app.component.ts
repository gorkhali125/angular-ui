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
    this.user = '';
    // this.user = {
    //   id: '2',
    //   name: 'Deepesh Khanal'
    // };
  }
}
