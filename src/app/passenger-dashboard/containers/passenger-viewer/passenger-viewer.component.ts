import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
    selector:'passenger-viewer',
    styleUrls:['passenger-viewer.component.scss'],
    template:`
    <div>
        <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)" >
        </passenger-form>
    </div>
    `
})

export class PassengerViewerComponent implements OnInit{
    passenger:Passenger | undefined
    constructor(
        private passengerDashboardService:PassengerDashboardService,
        ){   
    }
    ngOnInit(){
        this.passengerDashboardService.getPassenger(1)
        .subscribe((data:Passenger)=> this.passenger=data)
    }

    onUpdatePassenger(event:Passenger){
        console.log(event);
        this.passengerDashboardService.putPassengers(event)
        .subscribe((data:Passenger)=> {
            this.passenger=Object.assign({}, this.passenger, event)
        })
    }
}