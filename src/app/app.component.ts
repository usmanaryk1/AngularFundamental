// we are going to learn about import and export
//we need to import a component and component is a decarator which is a funtion and anatate a spacific function
// we are going to use a component decarator(@Component({})) against a typeScript class(export class AppComponent{}) to tell angular some spacif metadata like a template and selector of a element because when we creat component we creat elements.
import { Component } from '@angular/core';

//assentially component is just a function however because it is a decarator which is a typeScript feature we just prefix with the @ so this is what we need to do to just reristor a component with a angular to tell it is infact a component
//means declear a class with @ decarator to tell angular what type of class it is weater it is a component or module because both import from same place @angular/core
//so component hold a metadata for a particular component, in this case its a AppComponent
@Component({
  //so inside decarator we can creat something called selector in root project we can creat app-root
  //so selector essentially creat the element in the html so that angular have base root(app-root) component thet render entire application so use selector(<app-root></app-root>) in index.html 
  selector:'app-root',
  //in the boiler plate(when project created all essential liberaries are included) we have styleUrls:[''], in this array we have scss(sass) file (external file path) so allow us to style to particular component
  styleUrls:['./app.component.scss'],
  //assaign the template in this particulr component. two way 1=inline template string with backastric`` 2= external file(with url) templateUrl:'./app.component.html'
  template: `
   
    <!-- // event binding -->
    <!-- // event binding is one way data binding html to ts its fire a function on certain event such as (blur),(input),(click)="funcall()"-->
  
    <div>

      <!--// when a blur event fire we need to pass a function and pass $event in that we have diffrent properties target and value for this particulat element -->
      <input 
      type="text" 
      [value]="name"
      (blur)="handleBlur($event)"
      (input)="handleInput($event)"
      >

      {{name}}
      
      <!--//  button event binding-->
      <button (click)="handleClick()">click to change name</button>
    </div>

  `
})



//import and export from the same file and here class name is a component which we are going to import in a app.module.ts
export class AppComponent {

 
  //property[] bind in the input initial value pure one way data binding see here with example ts to html
  name:string="Tood"
  // and event () binding is also one way data binding from html to ts here call a function on particular event
  
  //its will change name value when click somewhere else after writing the input that value 
  handleBlur(event:any){
    console.log(event);
    this.name="Motoo" 
  }

  //whenever you write in input name value change with writing in input 
  handleInput(event:any){
    console.log(event.target.value);
    //assaign the input value to the name variabel
    this.name=event.target.value; 
  }

  //this will accour when click on button and button not need any $event pass
  handleClick(){
    this.name="Tood Motto"; 
  }
}

//what are components?
// we import it from angular/core => import { Component } from '@angular/core';
// component just decarate a particular class (with @ decarator)=>@Component({})
// the name of the component get exported =>export class AppComponent {}
// and register this component with a module => 1=import { AppComponent } from './app.component'; 2=declarations:[AppComponent], 3=(only for root component) bootstrap:[AppComponent]

