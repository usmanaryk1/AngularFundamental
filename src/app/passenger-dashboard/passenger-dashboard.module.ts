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
        FormsModule
     ],
     exports:[
         //we dont need to export count and detail component because we use in dashboard component and dashboard component is already export in app component(means count and detail are in dashboard component and dashboard is in app component)
        //  PassengerDashboardComponent,
        PassengerViewerComponent
     ],
     providers:[
        PassengerDashboardService,
        
     ]
 })
 export class PassengerDashboardModule{

 }