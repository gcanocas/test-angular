import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FairComponent } from './components/fair/fair.component';
import { HomeComponent } from './components/home/home.component';
import { Fair } from './models/fair.model';
import { FairResolve } from './resolvers/fair-resolve';

const routes: Routes = [
  {path: '', component: FairComponent},
  {path: 'fair', component: FairComponent},
  {
    path: 'home',
    component: HomeComponent,
    resolve:{
      fair: FairResolve,
    },
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
