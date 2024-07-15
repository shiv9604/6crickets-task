import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownComponent } from './countdown/countdown.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'countdown',
    pathMatch : 'full'
  },
  {
    path: 'countdown',
    component : CountDownComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeadlinesRoutingModule { }
