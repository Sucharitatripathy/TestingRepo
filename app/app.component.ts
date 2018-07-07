import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App from Murthy</h1>`
})
export class AppComponent {
  name:string;
  constructor(){
    this.name='Murthy'
  }
 }
