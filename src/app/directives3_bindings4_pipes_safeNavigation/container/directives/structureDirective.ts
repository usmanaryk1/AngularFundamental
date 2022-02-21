import { Component } from '@angular/core'

interface Pasenger {
    id:number,
    fullname:string,
    checkedIn:boolean
}
@Component({
    selector: 'structure-Directive',
    template:`

    <!-- // Angular directive and its expression transformation using pipes  -->
    
    <h3>*ngIf</h3>
    <!-- // ngIf is a Structural directive which show or hide something based on some expression -->
    <!-- // we can use things like shadow dom  04:09(shadow dom) -->
  

    we can add directive to a particular component or a template. <br>
    we can use expression like name.length or (name.length > 4) as a condition <br>
    <input type="text"  [value]="name" (input)="handleChanges($event)" > <br>

    <div *ngIf="name.length">
      {{name}}
    </div>

    show result after 4 input
    <div *ngIf="name.length > 4">
      {{name}}
    </div>

    <!-- // how directive works under the hood like in plane javascript -->
    <!-- //angular work under the hood like in <template> you don't see the ngIf in the dom element when you inspect you just see the actual div itself  -->
    <!--<template [ngIf]="name.length > 2 " >
    <div>
      {{name}}
    </div>
    </template> -->

    <h3>*ngFor</h3>
    <!-- ngFor -->
    <ul *ngFor=" let pasenger of pasengers; let i=index ">
        <li  >{{pasenger.id}} {{pasenger.fullname}} {{pasenger.checkedIn}}</li>
    </ul>
    <!-- angular ngFor works under the hood -->
    <!-- <template ngFor let-passenger let-i="index" [ngForOf]="pasengers">
    <li >{{passenger.id}} </li>
    </template> -->

        
    `
})
export class structureDirectiveComponent{

name: string= ' ';

//each time we click we get a template reference variable value
handleChanges(value: any){
  this.name=value.target.value;
  console.log(value.target.value);
}

pasengers :Pasenger[]=[{
    id:1,
    fullname:'usman',
    checkedIn: true
},
{
    id:2,
    fullname:'adnan',
    checkedIn: false
},
{
    id:3,
    fullname:'irfan',
    checkedIn: true
},
{
    id:4,
    fullname:'imran',
    checkedIn: false
}
]

}

