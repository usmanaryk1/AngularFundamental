import { Component } from '@angular/core'

@Component({
    selector: 'rendering-flow-directives',
    template:`

        <h1>Directives</h1>
    Directives allowes you to attached the behaviour of element in the dom.<br>
    Direvtive can define in angular as a class with @(directive decarator)<br>
    Directives are user define or builtin<br>
    3 types of directives: <br>
    1-component 2-structure and 3-attribute directive
    
    <ol>
        <li>Component Directive: 
            <conponent-directive></conponent-directive>
        </li>

        <li>Structure Directive:
            structure directive are responsible for html layout. <br>
            They shape or reshape the dom structure typically by adding, removing or manuplating elements. <br>
            examples like
            *ngIf  *ngFor  *ngSwitch
         </li>
            <structure-Directive></structure-Directive>

        <li>Attribute Directive:
        Attribute directive change the appearance or behaviour of a dom elements. <br>
        examples like
        *ngStyle  *ngClass
        </li>
        <attribute-directive></attribute-directive>
        
    </ol>

   
    <pipes-Data-Transformation></pipes-Data-Transformation>
    <safe-Navigation-Operator></safe-Navigation-Operator>


    `
})

export class displayRenderingFlowComponent{
    constructor(){
        
    }
}