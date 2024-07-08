
import { Directive, ElementRef } from '@angular/core';

import { Component } from '@angular/core'

interface Passenger {
    id: number,
    fullname: string,
    checkedIn: boolean
  }

@Component({
    selector: 'attribute-directive',
    styles:[`
    .customClass{
        backgroung:blue
    }

    .status {
      width: 10px;
      height: 10px;
      background: #c0392b;
      display: block;
      margin: 8px 10px 0 0;
      float: left;
      border-radius: 50%;
      &.checked-in {
        background: green;
      }
      &.checked-out {
        background: red;
      }
    }

    `],

    template:`
    <a href="https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/"> ngStyle and ngClass link</a>
    <h3>style and ngStyle example </h3>
    <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span
          class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')"></span>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span
          class="status"
          [ngStyle]="{
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }"></span>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>
  </div>


    <h3>class and ngClass example </h3>
    <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span
          class="status"
          [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
          }"></span>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>
  </div>

  
   <h3>Style and ngStyle </h3>
    <div [ngStyle]="{'background-color':'red'}">hellow</div>
    <div [ngStyle]="{'background-color':person=='usman' ? 'green' : 'red' }">conditional style add if person=='usman'</div>
    <div [style.backgroundColor]="showcolor">alternative conditional style add </div>
    
    <p [style.font-size]="special">Single style binding, direct string 24px is not working</p>
    <p [style.font-size.px]="24">Single style binding with units </p>
    <p [style]="{width: '100px', height: '100px', backgroundColor: 'cornflowerblue'}">Multi-style binding </p>
    
    <h3>class and ngClass </h3>
    these will work with bootstrap attached yet bootstrap notattached
    <div [ngClass]="{'text-success':true}">Single class binding</div>
    <div [ngClass]="{
        'text-success':person === 'usman',
        'text-primary':person === 'USA',
        'text-danger':person === 'HK'
      }">conditional binding ngClass </div>

    <div  [class.text-success]="person === 'UK'"
    [class.text-primary]="person === 'usman'"
    [class.text-danger]="person === 'HK'"
    >conditional binding alternative  </div>
    
    
    <h3>custom directive </h3>
    
    <p heighlight>custome directive heighlite us with the help of elementRef and renderrer2and Hostlistner use for mouseevents</p>
    <p heighlight><a href="https://www.digitalocean.com/community/tutorials/angular-using-renderer2">Using Renderer2 in Angular link</a></p>
    <p heighlight><a href="https://codecraft.tv/courses/angular/custom-directives/creating-a-custom-directive/">creating-a-custom-directive link</a></p>
    
    
    
    

    
    
    
    
    `
})

export class attributeDirectiveComponent{
    person:string='usman';
    showcolor:string='orange';
    special='24px';
    constructor(private el: ElementRef){
        
    }


    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true
      }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false
      }];


}




  
    // <!-- // Angular directive and its expression transformation using pipes  -->
    // <!-- // ngIf is a Structural directive which show or hide something based on some expression -->
    // <!-- // we can use things like shadow dom  04:09(shadow dom) -->
    
    // <div>
    
    // <input 
    // type="text" 
    // [value]="name"
    // (input)="handleChanges($event)"
    // >
  
    // </div>

