import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgIfUsageComponent } from './components/ng-if-usage/ng-if-usage.component';
import { HiddenUsageComponent } from './components/hidden-usage/hidden-usage.component';
import { NgSwitchCaseUsageComponent } from './components/ng-switch-case-usage/ng-switch-case-usage.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfUsageComponent,
    HiddenUsageComponent,
    NgSwitchCaseUsageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
