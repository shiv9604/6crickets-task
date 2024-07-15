import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeadlinesRoutingModule } from './deadlines-routing.module';
import { CountDownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    CountDownComponent
  ],
  imports: [
    CommonModule,
    DeadlinesRoutingModule,
  ]
})
export class DeadlinesModule { }
