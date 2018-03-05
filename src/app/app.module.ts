import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgIfUsageComponent } from './components/ng-if-usage/ng-if-usage.component';
import { HiddenUsageComponent } from './components/hidden-usage/hidden-usage.component';
import { NgSwitchCaseUsageComponent } from './components/ng-switch-case-usage/ng-switch-case-usage.component';
import { NgForUsageComponent } from './components/ng-for-usage/ng-for-usage.component';
import { NgClassUsageComponent } from './components/ng-class-usage/ng-class-usage.component';
import { NgStyleUsageComponent } from './components/ng-style-usage/ng-style-usage.component';
import { SafeTransversalOperatorUsageComponent } from './components/safe-transversal-operator-usage/safe-transversal-operator-usage.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfUsageComponent,
    HiddenUsageComponent,
    NgSwitchCaseUsageComponent,
    NgForUsageComponent,
    NgClassUsageComponent,
    NgStyleUsageComponent,
    SafeTransversalOperatorUsageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
