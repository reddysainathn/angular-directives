import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgIfUsageComponent } from './components/ng-if-usage/ng-if-usage.component';
import { HiddenUsageComponent } from './components/hidden-usage/hidden-usage.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfUsageComponent,
    HiddenUsageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
