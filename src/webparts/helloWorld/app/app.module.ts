import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { APP_STATES } from './app.states';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { routerConfigFn } from './router.config';


import { AppComponent, APP_STATES, Hello,About } from './Components/app.component';



@NgModule({
  declarations: [
    AppComponent,
    Hello, About 
  ],
  imports: [
    UIRouterModule.forRoot({ states: APP_STATES, useHash: true })
    ,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
