import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../../pages/page-not-found/';
import { HomepageComponent } from '../../pages/home/';
import { AuthGuardService } from '../guards/auth/';
import { LoginComponent } from '../../pages/login';

const routes: Routes = [
//  { path: 'crisis-center', component: CrisisListComponent },
//  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Heroes List' }
  },
  {
    path: 'users',
    component: HomepageComponent,
    canActivate: [],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [],
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
