import { Component } from '@angular/core'

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
    selector: 'safe-Navigation-Operator',
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

  <h3>safe navigation</h3>
<p>Safe Navigation ? include in template side (passenger.checkInDate ? "ok" : "not ok") if template render first and still data is fetching from server then this (passenger.checkInDate) gives error that value not found so use ? to wait for the value and then show called safe navigation.</p>

  <p>passenger.children.length gives error of length undefined so use safe navigation(?) passenger.children ?.length</p>
  
  <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengersSafeNavigation; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date: 
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
    `
})

export class safeNavigationOperatorComponent{

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
