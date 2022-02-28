import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
//for fetch dynamically id 
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector:'passenger-viewer',
    styleUrls:['passenger-viewer.component.scss'],
    template:`
    <div>
    <!-- for going back to passenger we need imparative routing (navigate) -->
    <button (click)="goBack()">
    &lsaquo; Go Back
    </button>
    <passenger-form
    [detail]="passenger"
    (update)="onUpdatePassenger($event)" >
    </passenger-form>
    </div>
    <!-- for view this component router should get hit from each passenger view button in passenger-datail component -->
    <!-- in detail component either use routerLink or imparative routing because detail component is stateless so we will use imparative route from its parent component -->
    `
})

export class PassengerViewerComponent implements OnInit{
    passenger:Passenger | undefined
    constructor(
        private passengerDashboardService:PassengerDashboardService,
        private router:Router,
        private route:ActivatedRoute
        ){   
    }
    ngOnInit(){
        // this.passengerDashboardService.getPassenger(1)
        // .subscribe((data:Passenger)=> this.passenger=data)


        //fetch dynamically id for that we use route param and observable switchmap, we use switch map because we should subscribe ang get value and after return again subscribe for service call data back
        //import Router and ActivatedRoute, we will subscribe of the changes of the route and we could read the routes param that comes back and pass them dynamically into our service 

        //allows us to subscribe to those param when we use route
        // this.route.params
        // .subscribe((data:Params)=>{
        //     console.log(data);//return id what we type either 1 or 2 or 3 so we can get that right id {id: '2'}
        // })

        //now we use seitchMap instead of subscribe, means change the subscription into another subscription, switchMap is expecting observable and we can use servise as observable
        //there are we use 2 observable params and switchMap
        //switchMap change the observable URL subscription into a new obsevalbe and we get the result of new observable by subscribing it (switchMap)
        this.route.params
        // .pipe(switchMap((data:Params)=>this.passengerDashboardService.getPassenger(data.id)))
        .pipe(switchMap((data:Params)=>{//(data:Passenger) giving error?
            return this.passengerDashboardService.getPassenger(data.id)}
        ))
        .subscribe((data:Passenger)=> this.passenger=data)
        
    }

    onUpdatePassenger(event:Passenger){
        console.log(event);
        this.passengerDashboardService.putPassengers(event)
        .subscribe((data:Passenger)=> {
            this.passenger=Object.assign({}, this.passenger, event)
        })
    }

    //if we wana go back we use native api (of router navigate) called imparative routing because we use native api (navigate(['/passenger'])) rather then use routerLink as we use before
    goBack(){
        this.router.navigate(['/passengers']);//imparative routing
    }
}