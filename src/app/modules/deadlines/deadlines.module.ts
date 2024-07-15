import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadlinesRoutingModule } from './deadlines-routing.module';
import { CountDownComponent } from './countdown/countdown.component';
import { ToasterModule } from 'angular2-toaster';


@NgModule({
  declarations: [
    CountDownComponent
  ],
  imports: [
    CommonModule,
    DeadlinesRoutingModule,
    ToasterModule.forChild()
  ]
})
export class DeadlinesModule { }
