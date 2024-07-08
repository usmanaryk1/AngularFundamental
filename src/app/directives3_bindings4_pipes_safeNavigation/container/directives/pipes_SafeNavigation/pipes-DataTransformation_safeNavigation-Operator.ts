import { Component } from '@angular/core'
interface Passenger {
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: number | null
  }

//   safeNavigation
interface Child {
    name: string,
    age: number
  }
  
  interface PassengerSafeNavigation {
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: number | null,
    children: Child[] | null
  }

  

@Component({
    selector: 'pipes-Data-Transformation',
    styles:[`
    .status {
        width: 10px;
        height: 10px;
        background: #c0392b;
        display: block;
        margin: 8px 10px 0 0;
        float: left;
        border-radius: 50%;
        &.checked-in {
          background: #2ecc71;
        }
      }
      `
    ],
    template:`
    <h3>Pipes Data Transformation</h3>
    <p>pipes are builtin like ( | json, | date: 'yMMMMd', | uppercase) and custom</p>
    
<div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}
        <p>{{ passenger | json }}</p>
        
        
        <div class="date">
          Check in date: 
          {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
      </li>
    </ul>
  </div>

    `
})

export class pipesDataTransformationComponent{
   
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000
      }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null
      }];

    //   safe navigation
    passengersSafeNavigation: PassengerSafeNavigation[] = [{
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
