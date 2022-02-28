import { Component } from '@angular/core';
interface Nav{
  link:string,
  name:string,
  exact:boolean
}
@Component({
  selector:'app-root',
  styleUrls:['./app.component.scss'],
  template: `
   
  <div class="app" >
  <!-- make a router link here -->

  <nav>
  <!-- routerLink for navigate -->
  <!-- routerLinkActive use for styling, when click on a link this class is added-->
  <!-- routerLinkActiveOptions=> when click on another link instead home so still empty path "/" is also matching  and homepage routerLinkActive class avtive is implement so we need to use [routerLinkActiveOptions]="{exact:true}" exact true means if this home page active class will implemet when it is exact hit -->
 
 
 <!-- <a 
  routerLink="/"
  routerLinkActive="active"
  [routerLinkActiveOptions]="{ exact : true }"
  >
  Home
  </a>
  <a 
  routerLink="/oops"
  routerLinkActive="active" >
  404
  </a> 
  -->

  <!-- now dynamically implemet navigation -->
  <!-- Note: change routerLink into [routerLink] because for dynamically implemetation this not is easy as routerLink="item.link" it will not work so router link allows us to use property binding like[routerLink] now we can use item.link -->
  <a 
  *ngFor="let item of nav"
  [routerLink]="item.link" 
  routerLinkActive="active" 
  [routerLinkActiveOptions]="{ exact : item.exact }">
  {{item.name}}
  </a>

  </nav>

    <router-outlet></router-outlet>
  </div>

  `
})



//import and export from the same file and here class name is a component which we are going to import in a app.module.ts
export class AppComponent {

  //now dynamically implemet navigation
  nav:Nav[]=[
    {
      link:"/",
      name:'Home',
      exact:true
    },
    {
      link:"/passengers",
      name:'Passengers',
      exact:false
    },
    {
      link:"/oops",
      name:'404',
      exact:false
    }
  ]

}
