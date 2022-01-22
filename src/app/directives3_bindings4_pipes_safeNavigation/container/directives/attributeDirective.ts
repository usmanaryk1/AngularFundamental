

import { Component } from '@angular/core'

@Component({
    selector: 'attribute-directive',
    template:`
    
    `
})

export class attributeDirectiveComponent{
    constructor(){
        
    }
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

    // <!--// stractual dractive= we can add directive to a particular component or a template -->
    // <div *ngIf="name.length">
    //   {{name}}
    // </div>

    // <!--//we can use expression like (name.length > 2) -->
    // <!--//show result after 3 input word writen -->
    // <div *ngIf="name.length > 2">
    //   {{name}}
    // </div>

    // <!-- // how directive works under the hood like in plane javascript -->
    // <!-- //angular work under the hood like in <template> you don't see the ngIf in the dom element when you inspect you just see the actual div itself  -->
    // <!--<template [ngIf]="name.length > 2 " >
    // <div>
    //   {{name}}
    // </div>
    // </template> -->