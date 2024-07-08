import { Component } from '@angular/core';

@Component({
  selector: 'interpolation-expression',
  styles: [`
  
  `],
  template: `
    
  <h3>Interpolation-expressions</h3>
  <p>One way data binding component side to template side</p>


    <div class="app">
      {{ title + '!' }}
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    </div>
  `
})
export class interpolationComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = 'Ultimate Angular';
  }
}