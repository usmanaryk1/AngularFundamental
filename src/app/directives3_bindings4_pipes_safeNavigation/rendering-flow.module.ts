import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
//custom attribute directive
import { customAttributeHeightlightDirective } from './container/directives/customAttributeDirectivr.directive'
//components
import { componentDirectiveComponent } from './container/directives/componentDirective'
import { structureDirectiveComponent } from './container/directives/structureDirective'
import { attributeDirectiveComponent } from './container/directives/attributeDirective'
import { pipesDataTransformationComponent } from './container/directives/pipes_SafeNavigation/pipes-DataTransformation_safeNavigation-Operator'
import { displayRenderingFlowComponent } from './container/display.component'
import { safeNavigationOperatorComponent } from './container/directives/pipes_SafeNavigation/safeNavigation-Operator.component'


@NgModule({

    declarations:[
        componentDirectiveComponent,
        structureDirectiveComponent,
        attributeDirectiveComponent,
        displayRenderingFlowComponent,
        customAttributeHeightlightDirective,
        pipesDataTransformationComponent,
        safeNavigationOperatorComponent
    ],
    imports:[
        CommonModule,

        //custom module
   
        
    ],
      //for use these component to other module we need to export
    exports:[
        componentDirectiveComponent,
        structureDirectiveComponent,
        attributeDirectiveComponent,
        displayRenderingFlowComponent,
        customAttributeHeightlightDirective,
        pipesDataTransformationComponent,
        safeNavigationOperatorComponent

    ]
})
export class renderFlowModule{}