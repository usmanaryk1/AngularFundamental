//need NgModule to export AppModule in the last line
import { NgModule } from '@angular/core';
// for browsing base application need to import browser
import { BrowserModule } from '@angular/platform-browser';
// for use directive we need common module
import { CommonModule } from '@angular/common'


//to register a component 1=inport it and 2=declear it in @NgModule({declarations:[ AppComponent, etc component], and 3=(only for root component) bootstrap it in @NgModule({  bootstrap:[AppComponent] })
import { AppComponent } from './app.component';

//custom module
import { testModule } from '../directives_ngStyle_ngClass_pipes_safeNavigation/test.module'
import { renderFlowModule } from './directives3_bindings4_pipes_safeNavigation/rendering-flow.module';
import { templateBindingModule } from './directives3_bindings4_pipes_safeNavigation/container/bindings/template-fundamental.module';
@NgModule({
  declarations:[
    //all component will be declear here
    AppComponent,
    
   
  ],
  imports:[
    //all module will be import here
    //angular module
    BrowserModule,
    CommonModule,


    //custom module
    renderFlowModule,
    templateBindingModule,
    testModule,

  ],
  //to run our application (connection with main.ts)
  bootstrap:[AppComponent]
})

//NgModule become AppModule so export it 
export class AppModule{}









// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
