import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { displayBindingComponent } from "./displayBinding.component";
import { eventBindingConponent } from "./eventBindingOneWay.component";
import { interpolationComponent } from "./interpolationExpression_Event_Property_TwoWay-dataBinding_templateRef";
import { propertyBindingConponent } from "./propertyBindingOneWay.component";
import { twoWayBindingConponent } from "./twoWayDataBinding.component";
import { FormsModule } from '@angular/forms';
import { templateRefVariableComponent } from "./templateRefVariable.component";
@NgModule({
    declarations:[
        interpolationComponent,
        displayBindingComponent,
        eventBindingConponent,
        propertyBindingConponent,
        twoWayBindingConponent,
        templateRefVariableComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        interpolationComponent,
        displayBindingComponent,
        eventBindingConponent,
        propertyBindingConponent,
        twoWayBindingConponent,
        templateRefVariableComponent
    ]
})

export class templateBindingModule{}