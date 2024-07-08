import { Component , OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
//for imparative routing
import { Router } from '@angular/router';
@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>

    <!--these two are stateless components-->

    <passenger-count
    [items]="passengers">
    </passenger-count>

    <!--
    see these how value instantally reflect while typing name when editing (commit ngOnChanging first in passenger-detail component)
    <div  *ngFor="let passenger of passengers">
    {{passenger.fullname}}
    </div>
    -->

    <passenger-detail
    *ngFor="let passenger of passengers"
    [detail]="passenger"
    (edit)="handleEdit($event)"
    (remove)="handleRemove($event)"
    (view)="handleView($event)"
    >
    </passenger-detail>

    </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    //Smart/container and Dump/stateless Component
    //Note:------>>>>>> Container component/folder (also called smart component) contain data and render stateless(dump) child component. and component folder has a staateless child component also called dump/stateless component
    
    passengers:Passenger[]=[]//strict initializing;
    
    constructor(private passengerDashboardService:PassengerDashboardService,
        private router:Router){}
    ngOnInit(){
        console.log("ngOnInit");
        // this.passengers= this.passengerDashboardService.getPassengers();
        // console.log("this.passengers",this.passengers);
        this.passengerDashboardService.getPassengers()
        .subscribe((data:Passenger[])=> {
            this.passengers= data
            console.log("this.passengers",this.passengers);
        })
        
    }

    handleEdit(event:Passenger){
        console.log("edit event",event);
        this.passengerDashboardService.putPassengers(event)
        .subscribe((data:Passenger)=>{
             //if our request were successful then we update our api
            this.passengers= this.passengers.map((passenger:Passenger)=>{
            if(passenger.id === event.id){
                // console.log("Object.assign({},passenger,event)",Object.assign({},passenger,event));
                passenger=Object.assign({},passenger,event)//what assign do, is merging those changing accross(merge changing old passenger object to new event object)
            }
            return passenger;
            })
        })
       
        console.log(this.passengers);//we cant see the changing because our browser changing localay ao we need to see our changing in console.log
        
    }
    handleRemove(event:Passenger){
        console.log("remove event",event);
        this.passengerDashboardService.removePassengers(event)
        .subscribe((data:Passenger)=>{
            //without this logic not update browser i think because get methood not subscribe again
            this.passengers= this.passengers.filter((passenger:Passenger)=>{
                return passenger.id !== event.id//not return that particular passenger which we wana remove and assign new filter array to this.passengers again
            })

        })
        
        
    }
    handleView(event:Passenger){
        console.log("view event",event);
        //we are going to use dynamic imparative routing for indivigual passenger id
        // pass function argument as parameters
        this.router.navigate(['/passengers/', event.id])
    }

}