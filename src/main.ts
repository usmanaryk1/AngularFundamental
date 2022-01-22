//there is spacific way to bootstrap angular application on the server on the client or we can precompiler
//if we want to compile in the browser we have to use somthing call platformBrowserDynamic 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'//its not a module its a function to tell which module need to bootstrap//use client side code for process into the template all our binding and alow DI

//import the moduel(app.module.ts) we created to bootstrap the application 
import { AppModule } from './app/app.module'


// call a function and tell what module need to bootstrap call it and give name
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err=> console.error(err));







// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
