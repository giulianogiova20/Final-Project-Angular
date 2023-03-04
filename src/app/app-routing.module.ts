import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SessionGuard } from './core/guards/session.guard';


const routes: Routes = [
  {path: 'home', component: MainComponent, canActivate: [SessionGuard]},
  {path: 'courses', 
    loadChildren: ()=> import('./pages/courses/courses.module').then((module) => module.CoursesModule), 
    canLoad: [SessionGuard] 
  },
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }