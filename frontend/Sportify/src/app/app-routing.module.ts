import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';


import { LoginComponent } from './welcome-page/login/login.component';
import { SignupComponent } from './welcome-page/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './main-page/home/home.component';
import { WelcomeComponent } from './welcome-page/welcome/welcome.component';
import { GetEventsComponent } from './main-page/get-events/get-events.component';
import { CreateEventComponent } from './main-page/create-event/create-event.component';
import { EventDetailComponent } from './main-page/event-detail/event-detail.component';
import { MyEventsComponent } from './main-page/my-events/my-events.component';
import { ScoreboardComponent } from './main-page/scoreboard/scoreboard.component';
import { ProfileComponent } from './main-page/profile/profile.component';

import { AuthGuard } from './auth.guard';






/**
 * The appRoutes array of routes describes how to navigate.
 * Pass it to the RouterModule.forRoot method in the module imports to configure the router.
 * 
 * The order of the routes in the configuration matters and this is by design.
 * The router uses a first-match wins strategy when matching routes,
 * so more specific routes should be placed above less specific routes.
 * 
 * The wildcard route comes last because it matches every URL and should be selected only if no other routes are matched first.
 * 
 * The router selects the route with a first match wins strategy.
 * Wildcard routes are the least specific routes in the route configuration.
 * Be sure it is the last route in the configuration.
 */


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'events/:id', component: EventDetailComponent },
      { path: 'events', component: GetEventsComponent },
      { path: 'create', component: CreateEventComponent },
      { path: 'myevents', component: MyEventsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'scoreboard', component: ScoreboardComponent }
    ]
  },
  { path: '',
    component: WelcomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path: '**', // wildcard
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only!!!!!!!!!!!
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
