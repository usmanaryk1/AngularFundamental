
import { Component } from "@angular/core";


@Component({
    selector:'property-binding',
    styles:[`
    
    `],
    template:`
    <h3>Property Binding</h3>
    <p>One way data binding component side to template side</p>
    
    <div class="app">
      <p [innerHTML]="title"></p>
      <p>{{ title }}</p>
      <img [src]="logo" alt="propertyBinding"> <br>
      <input type="text" [value]="name">
      <div>{{ name }}</div>
    </div>
    
    `
})

export class propertyBindingConponent{
    title: string;
    name: string = 'Todd';
    logo: string = 'assets/logo.jpg';
    constructor() {
      this.title = 'Ultimate Angular';
    }
}