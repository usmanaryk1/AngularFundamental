import { Component } from "@angular/core";

@Component({
    selector:'template-ref',
    template:`
    <h3>Template Refrence Variable with #</h3>

    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
      <div>{{ name }}</div>
    </div>

    `
})

export class templateRefVariableComponent{
    name: string = 'Todd';
  handleClick(value: string) {
    this.name=value;
    console.log(value);
  }
}