
import { Component } from "@angular/core";


@Component({
    selector:'event-binding',
    styles:[`
    
    `],
    template:`
    <h3>Event Binding</h3>
    <p>One way data binding template side to component side</p>

    <div class="app">
    <button (click)="handleClick()">
      Change name
    </button>
    <input 
      type="text" 
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)">
    <div>{{ name }}</div>
  </div>
    
    `
})

export class eventBindingConponent{
    constructor(){

    }
    name: string = 'Todd';
    handleClick() {
      this.name = 'Motto';
    }
    handleInput(event: any) {
      this.name = event.target.value;
    }
    handleBlur(event: any) {
      this.name = event.target.value;
    }
}