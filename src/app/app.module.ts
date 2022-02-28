//need NgModule to export AppModule in the last line
import { NgModule } from '@angular/core';
// for browsing base application need to import browser
import { BrowserModule } from '@angular/platform-browser';
// for use directive we need common module
import { CommonModule } from '@angular/common'


//to register a component 1=inport it and 2=declear it in @NgModule({declarations:[ AppComponent, etc component], and 3=(only for root component) bootstrap it in @NgModule({  bootstrap:[AppComponent] })
import { AppComponent } from './app.component';

//Routeer module 
import { RouterModule, Routes } from '@angular/router';

//custom module
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

//components
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

//baseUrls
export const baseUrl ="http://localhost:3000"

//routes defined here
const routes:Routes=[
  {path:'' , component: HomeComponent, pathMatch:'full'},//if you wana go to state to passengers instead home page then use redirectTo
  //redirectTo to go to straght forward spacific routs when open a app or path is empty note:here home then will not work because there is no any component:HomepageComponent set we change it to redirectTo another route
  // {path:'' , redirectTo:'passengers', pathMatch:'full'},//remove component: HomeComponent and redirect to any route here is passengers
  {path:'**', component:NotFoundComponent }//wildCard selector means notFound
] 


@NgModule({
  declarations:[
    //all component will be declear here
    AppComponent,
    HomeComponent, 
    NotFoundComponent,//not found ** called wildCard in routes path
   
  ],
  imports:[
    //all module will be import here
    //angular module
    BrowserModule,
    CommonModule,

    //router module
    //we need to import method called forRoot() and pass routes from it //there is one another method forChild() method use in another passenger-dashboard.module.ts as child routes
    RouterModule.forRoot(routes ), 
    //angular also provides us different location strategy so by location srategies means the URL 
    // RouterModule.forRoot(routes, {useHash:true} ),//forRoots accept different argument suchas (config?: ExtraOptions) we use on options like {useHash:true} to use hashes in urls, its use the history apis and modren way to doing this is without the # however if you use # your server support this type of location , normal mood without # beneifit is server side render wo called push location strategy api which uses the history.push state and it is html5 histry api 


    //custom module
    PassengerDashboardModule

  ],
  providers:[
    {provide:'BaseURL',useValue: baseUrl}
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
