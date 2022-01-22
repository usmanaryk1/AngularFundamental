import { NgModule } from '@angular/core';

//common module import to use directives (ngIf ngFor ngSwitch) in component
import { CommonModule } from '@angular/common'

import { testAppComponent } from './test.component'

@NgModule({
    declarations:[
        testAppComponent,
    ],
    imports:[
        CommonModule,
        
    ],
    //for use these component to other module we need to export
    exports:[
        testAppComponent
    ],
})
export class testModule{}