import{ Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector:'passenger-count',
    template:`
    <div>
    <h3> Airline Passengers</h3>
    Total checked in: {{checkedInCount()}} / {{items.length}}
    </div>
    
    `
})
export class PassengerCountComponent{

    @Input()
    items:Passenger[]=[];
    // checkedInCount():number{
    checkedInCount(){
        if(!this.items) return;
      return  this.items.filter(passenger=> passenger.checkedIn).length;
    }
} 