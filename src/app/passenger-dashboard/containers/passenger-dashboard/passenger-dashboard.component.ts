import { Component , OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface';

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
    >
    </passenger-detail>

    </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    //Smart/container and Dump/stateless Component
    //Note:------>>>>>> Container component/folder (also called smart component) contain data and render stateless(dump) child component. and component folder has a staateless child component also called dump/stateless component
    
    passengers:Passenger[]=[]//strict initializing;
    
    constructor(){}
    ngOnInit(){
        console.log("ngOnInit");
        
    this.passengers=[{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
      }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }];
    }

    handleEdit(event:Passenger){
        console.log("edit event",event);
        this.passengers= this.passengers.map((passenger:Passenger)=>{
            if(passenger.id === event.id){
                console.log("Object.assign({},passenger,event)",Object.assign({},passenger,event));
                passenger=Object.assign({},passenger,event)//what assign do, is merging those changing accross(merge changing old passenger object to new event object)
            }
            return passenger;
        })
        console.log(this.passengers);//we cant see the changing because our browser changing localay ao we need to see our changing in console.log
        
    }
    handleRemove(event:Passenger){
        console.log("remove event",event);
        this.passengers= this.passengers.filter((passenger:Passenger)=>{
            return passenger.id !== event.id//not return that particular passenger which we wana remove and assign new filter array to this.passengers again
        })
        
    }

}