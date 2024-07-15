import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'deadlines',
    loadChildren: () => import('./modules/deadlines/deadlines.module').then(m => m.DeadlinesModule),
  },
  {
    path: '',
    redirectTo: 'deadlines',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo : 'deadlines'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
