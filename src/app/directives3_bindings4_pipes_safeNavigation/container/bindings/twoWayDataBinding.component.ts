
import { Component } from "@angular/core";


@Component({
    selector:'two-way-data-binding',
    styles:[`
    
    `],
    template:`
    <h3>Two way data Binding or Banana in a box</h3>
    <p>Two way data binding template side to component side and component side to template</p>
    <p>Two way data binding use ngModel for that we need to include FormModule in app.module.ts</p>

   <div class="app">

      <button (click)="handleClick()">
        Change name set
      </button>

      <p>angularway</p>
        <input 
          type="text" 
          [(ngModel)]="name">
        <div>{{ name }}</div>

    <p>alternative way angular works under the hood </p>
      <input 
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">

      </div> 
    
    `
})

export class twoWayBindingConponent{
    constructor(){

    }
    name: string = 'Todd';

    handleClick() {
      this.name = 'Motto';
    }

    handleChange(value: string) {
      this.name = value;
    }
}