import{ Component,OnChanges, Input ,Output,EventEmitter} from '@angular/core'
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector:'passenger-detail',
    styleUrls:['passenger-detail.component.scss'],
    template:`
    <div>
    
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
    <div *ngIf="editing">
    <input 
     #name 
     [value]="detail.fullname"
     (input)="OnNameChange(name.value)">
    </div>
    
    <div *ngIf="!editing">
    {{ detail.fullname }}
    </div>

    <div class="date">
    Check in date: 
    {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
    </div>
    <div class="children">
    Children: {{ detail.children?.length || 0 }}
    </div>

    <button (click)="toggleEdit()">
    {{ editing ? 'Done' : 'Edit' }}
    </button>
    <button (click)="onRemove()">
    Remove
    </button>



    </div>

    `
})
export class PassengerDetailComponent implements OnChanges{
    @Input()
    detail:any;
    // detail:Passenger[]=[];
    editing:boolean=false;

    @Output()
    edit:EventEmitter<any>= new EventEmitter();

    @Output()
    remove:EventEmitter<any>= new EventEmitter();

    //if not use then when name is editing in parrent component instantally changing as typing name (see yourself by adding ngFor in parrent and comment ngOnChanging and see instantily name change when typing)so ngOnChanging comes in handy now changing will not go to parrent untill fully changed the name and until clicked on done. so make a logic in ngOnChanging
    // and its render before the ngOnInit 
    //its not angular fault its how javascript works (first declear the variable and then change that variable from elsewhere so variable change so angular also work the same way because its gives the variable reference not a variable value so thats way when variable change reference parrent also change thats way OnChages comes handy)
    ngOnChanges(changes:any){
        if(changes.detail){
            this.detail=Object.assign({},changes.detail.currentValue)
        }
        // console.log(changes);//show previous and current value of changes   
    }
    
    OnNameChange(value:string){
        this.detail.fullname=value; //changing the value of local state 
        // console.log("value",value);
        
    }
    toggleEdit(){
    console.log("editing", this.detail);//only clicked passenger detail will show not all magic
    if(this.editing){
        this.edit.emit(this.detail)//now go to parent and set event comes from child and call a method (edit)="handleEdit($event)"
    }
    this.editing=!this.editing;//true to false or false to true  //toggling 
    }

    onRemove(){
        console.log("removing",this.detail);//only clicked item will get because this.detail has only one passenger each time when *ngFor come from parent <passenger-dashboard> to in this <passenger-detail *ngFor>
        this.remove.emit(this.detail)//now go to parent and set event comes from child and call a method (remove)="handleRemove($event)"
        
    }

}