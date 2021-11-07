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
   
    <!-- // property binding -->
    <div>
    
    <!-- we use sugur syntex  means  in javascript Syntactic sugar means that the new features of the language are not really new. Instead, they are a nicer syntax for something existing/ You could do exactly the same by writing something different in the old version. like let a = b + c can have syntactic sugar as let a = b.Add(c) -->
    <h1>{{title}}</h1>
    
    <!-- // in plane javaScript we may have access particular dom node and then element dot innerHTML = 'something', same we have in angular with property binding   -->
    <!-- // we have sync capability in angular [innerHTML] like js, it will bind property innerHTML with title  -->
    <!--// we use square bracket notation around the property name we want to bind to, its indicate one way data flow syntax -->
    <!--// data come down to the class(see title), binds to the template([]="title"), looks the property([innerHTML]="") src and send it to html content -->
    <!--// element.innerHTML="title" is equal to [innerHTML]="title" -->
    <h1 [innerHTML]="title"></h1>
    </div>
    
    <div>
    
    <!--// element.src="name.jpg" is equivalent in angular to [src]="logo" -->
      <img [src]="logo" >


      <!--// here name dynamically show in input text field so original name down value will not change in ts means in js element.value="todd" same in angular like [value]="name' and name declear in ts with its intial string value which is show here-->
      <input type="text" [value]="name">
      <!--// here name will not change by writing in input text field because it is pure one way data binding ts to html -->
      {{name}}
    </div>

  `
})



//import and export from the same file and here class name is a component which we are going to import in a app.module.ts
export class AppComponent {

  //bind logo path with img src (property binding)
  logo:string="assets/logo.jpg";

  //bind the input initial value pure one way data binding see here with example ts to html
  name:string="Tood"
  
  title:string;
  constructor(){
    this.title ='AngularFandamental';
  }
}

//what are components?
// we import it from angular/core => import { Component } from '@angular/core';
// component just decarate a particular class (with @ decarator)=>@Component({})
// the name of the component get exported =>export class AppComponent {}
// and register this component with a module => 1=import { AppComponent } from './app.component'; 2=declarations:[AppComponent], 3=(only for root component) bootstrap:[AppComponent]

