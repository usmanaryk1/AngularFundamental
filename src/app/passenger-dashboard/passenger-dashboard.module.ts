import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

//import HTTP module
import { HttpClientModule } from '@angular/common/http';
//import forms module
import { FormsModule } from '@angular/forms';

//services
import { PassengerDashboardService } from './passenger-dashboard.service';
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.conponent';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

//forChild routes implement here
import { RouterModule, Routes } from '@angular/router';
  
//child routes define here
//add these path to nav in app.component.ts
//Array of children is lower level routes called child routes, if we wanna visit /passenger/1 then need children
const routes:Routes=[
    // {
    //     path:"passengers",
    //     component:PassengerDashboardComponent
    // }
    //Note: change logic here up to down for child routes and PassengerDashboardComponent will loadded when click on passenger first for that first path should be "" empty string and gives component name so upper level routes /passengers will loadded first then click on individual passenger view then it will load children component path like "/passenger/id"
    {
        path:"passengers",
        children:[
            {path:'', component:PassengerDashboardComponent},//upper level routes /passengers will loadded first when click on "/passengers" 
            //fetch the right passenger based on their id , subscribes routs param when location changes we could pull correct data(id) to our service so corrent passenger data should render, means set id dynamically with params in passenger-viewer.component.ts like this.passengerDashboardService.getPassenger(1), dynamically should change id(1,2,3,etc) getPassenger(id)
            {path:':id', component:PassengerViewerComponent},//upper level routes /passengers will loadded first when click on "/passengers" 
        ]
    }
    //or we also can do like this for children routes i think at upper level also so whats different i am not prety sure yet i think rendering called diff may be
    // {
    //     path:"passengers/:id",
    //     component:PassengerViewerComponent
    // }
]

 @NgModule({
     declarations:[
         PassengerDashboardComponent,
         PassengerViewerComponent,
         
         PassengerCountComponent,
         PassengerDetailComponent,
         PassengerFormComponent
     ],
     imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,
        //child routes 
        //if we use routes then we don't need to exports components here
        RouterModule.forChild(routes),
     ],
    //Note: if we use routes then we don't need to exports components here
    //  exports:[
    //      //we dont need to export count and detail component because we use in dashboard component and dashboard component is already export in app component(means count and detail are in dashboard component and dashboard is in app component)
    //     //  PassengerDashboardComponent,
    //     PassengerViewerComponent
    //  ],
     providers:[
        PassengerDashboardService,
        
     ]
 })
 export class PassengerDashboardModule{

 }