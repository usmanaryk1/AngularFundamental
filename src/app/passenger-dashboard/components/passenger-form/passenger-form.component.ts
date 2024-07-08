import { Component, Input, Output ,EventEmitter } from '@angular/core';

import { Baggage } from '../../models/baggage.interface';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector:'passenger-form',
    styleUrls:['passenger-form.component.scss'],
    template:`
    <!-- template-driven-form ngForm is keep tracking all changes in the form and export the form -->
    <!-- (angular not set a null value in template driven form) like in interface checkInDate:number|null -->
    <!-- {{detail}} is a reference object and template is a form of true {{detail |json}} its value not change by typing in input with [ngModel] however form {{form.value| json}} value is change because it is a template reference variable, not only one value complete form is assign to it via ngForm where you can access all the form so in javaScript we have 2nd level of controll-->
   
    <form #form="ngForm" novalidate (ngSubmit)="handleSubmit(form.value, form.valid)"> <!-- we can use both (submit)="" preffer (ngSubmit)="" because do extra stuff like ngForm underneath like passing invalid state into the event fired and (ngSubmit)="handleSubmit() not need passing any value but optionaly we can pass form and any validation like (ngSubmit)="handleSubmit(form.value, form.valid)" -->
    {{detail | json}}
    <!--ngModel at run time we need to populate with initial value (detail.fullname)so use property biding([]) [ngModel] instead of ngModel only so it becomes now [ngModel]="detail.fullname" and with safety check(?) [ngModel]="detail?.fullname"-->
    <!-- input full name-->
    <div>
    Passenger Name:
    <input
    type="text"
    name="fullname"
    [ngModel]="detail?.fullname" 
    >
    </div>

<!-- export the ngModel (like #idd="ngModel"), output the value so we use template reference to handle error with required so if error show null means no error and if show "required"=true means there is validation error (see error in {{idd.errors | json }})-->
<!-- need three things (explicit binding) required, (export local ngModel binding and reference it with #) #idd="ngModel" and {{idd.errors | json }}). We use required attribute so ngModel know about it-->
<!-- ngModel keep track validation state for us like ngForm  -->
    <div>
    Passenger ID:
    <input
    type="number"
    name="id"

    required
    #idd="ngModel"

    [ngModel]="detail?.id" 
    >
        <!-- know we going to impliment the validation state-->
        <!-- idd.errors return null or object "required"=true so we need true for ngIf so for that we use idd.errors.required(it will return either true or null and for null will give error so we use safe navigation for thet idd.errors?.required)-->
        <!-- when intial value not assigned or wana creat new passenger it shows error when dom initially renderd before typing something so use .dirty-->
        <!-- we alse can use .tuched over .dirty so user touched the input and left it gives error. Personally prefer .dirty so user first interact with input and its gives remonder if uer deleted someting via the own input-->
        <div *ngIf="idd.errors?.required && idd.dirty" class="errorStyle">
        Id is required.
        </div>

        <!-- we also can use other validation like minlength, min etc minlength="11" or min="0" -->
        <div *ngIf="idd.errors?.minlength && idd.dirty" class="errorStyle">
        Minimun length is 11 (like phone number validation) .
        </div>
    </div>

    <div>{{idd.errors | json }}</div> <!-- idd.errors return null or object "required"=true -->
    <!-- we also checked the property valid and invalid like errors -->
    <div>Valid: {{idd.valid | json }}</div>
    <div>Invalid: {{idd.invalid | json }}</div>


    <!-- Radio button -->
    <!-- property binding[ngModel] and event binding (ngModelChange)(gives event back, true or false value) -->
    <!--
    <div>
    <label>
    <input
    type="radio"
    [value]="true"
    name="checkedIn"
    [ngModel]="detail?.checkedIn" 
    (ngModelChange)="toggleCheckIn($event)"
    >
    Yes
    </label>
    </div>
    <div>
    <label>
    <input
    type="radio"
    [value]="false"
    name="checkedIn"
    [ngModel]="detail?.checkedIn" 
    (ngModelChange)="toggleCheckIn($event)"
    >
    No
    </label>
    </div>
    -->

    <!-- checkbox also work the same way like radio but [value] is not included and its a batter way for returning true or false rather then radio button -->
    <div>
    <label>
    <input
    type="checkbox"
    name="checkedIn"
    [ngModel]="detail?.checkedIn" 
    (ngModelChange)="toggleCheckIn($event)"
    >
    </label>
    </div>

    <div *ngIf="form.value.checkedIn" >
    <input
    type="number"
    name="checkInDate"
    [ngModel]="detail?.checkInDate"
     >
    </div>

    <!-- select value with dynamic options -->
    <div>
        Lagggage:
        <select
        name="baggage"
        [ngModel]="detail?.baggage">
            <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"> 
                {{item.value}}
            </option>
        </select>

        <!-- use [ngValue] if you do know the api otherwise for developer [value] and [selected] is good ([ngValue] is equal to both [value]and[selected]) -->
        both are working same previous([value][selected]) and after([ngValue]) 
        <select
        name="baggage"
        [ngModel]="detail?.baggage">
            <option
            *ngFor="let item of baggage"
            [ngValue]="item.key"> 
                {{item.value}}
            </option>
        </select>
    </div>

    <!-- diabling the submit button on invalid [disabled]="form.invalid" or [disabled]="!form.valid"-->
    <!-- type="submit" bubble up the form and fire (submit)="" preffer (ngSubmit)="" and in button not need (click) event when use type="submit"-->
        <button
        type="submit"
        [disabled]="form.invalid"
        >
        Update Passenger
        </button>

    {{form.value | json }}

    </form>
    `
})
export class PassengerFormComponent{
 
@Input()
detail:Passenger | any;//only Passenger not work ? (angular not set a null value in template driven form)

@Output()
update:EventEmitter<Passenger>= new EventEmitter<Passenger>()

baggage:Baggage[]=[{
    key:'None',
    value:'No baggage'
},
{
    key:'Hand-Only',
    value:'Hand baggage'
},
{
    key:'Hold-Only',
    value:'Hold baggage'
},{
    key:'Hand-Hold',
    value:'Hand and Hold baggage'
}]
toggleCheckIn(checkedIn:boolean){
    if(checkedIn){
        this.detail.checkInDate = Date.now() //alternately +new Date() in mili seconds
    }
}

handleSubmit(passenger:Passenger , isValid:any){
console.log(passenger,isValid);

    if(isValid){
        this.update.emit(passenger)
    }
}


}