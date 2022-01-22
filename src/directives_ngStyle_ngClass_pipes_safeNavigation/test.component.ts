import { Component } from '@angular/core'
@Component({
    selector:'test-app',
    styleUrls:['./test.component.scss'],
    templateUrl:'./test.component.html'
})
export class testAppComponent{

    logo:string="usman";
    ddd:string="yap"
    gg:string=" "
    constructor(){
        console.log("test.component");
        
    }
    ok(g:any){
      this.ddd=g.target.value;
        console.log(g);
        
    }

}