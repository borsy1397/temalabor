import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';


import { HeaderComponent } from './welcome-page/header/header.component';
import { BodyComponent } from './welcome-page/body/body.component';
import { LoginComponent } from './welcome-page/login/login.component';
import { SignupComponent } from './welcome-page/signup/signup.component';
import { FooterComponent } from './welcome-page/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './main-page/home/home.component';
import { WelcomeComponent } from './welcome-page/welcome/welcome.component';
import { CreateEventComponent } from './main-page/create-event/create-event.component';
import { GetEventsComponent } from './main-page/get-events/get-events.component';
import { MainHeaderComponent } from './main-page/main-header/main-header.component';
import { MainBodyComponent } from './main-page/main-body/main-body.component';
import { EventDetailComponent } from './main-page/event-detail/event-detail.component';
import { FilterEventnamePipe } from './main-page/filter-eventname.pipe';
import { TokenInterceptorService } from './token-interceptor.service';
import { MyEventsComponent } from './main-page/my-events/my-events.component';
import { ScoreboardComponent } from './main-page/scoreboard/scoreboard.component';
import { TeamComponent } from './welcome-page/team/team.component';
import { ProfileComponent } from './main-page/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    CreateEventComponent,
    GetEventsComponent,
    MainHeaderComponent,
    MainBodyComponent,
    EventDetailComponent,
    FilterEventnamePipe,
    MyEventsComponent,
    ScoreboardComponent,
    TeamComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "apikeyishere"
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
