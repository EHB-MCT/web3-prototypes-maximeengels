import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ProgramComponent } from './program/program.component';
import { PracticalComponent } from './practical/practical.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
   imports: [
      BrowserModule,
      ClickOutsideModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavigationComponent,
      HomeComponent,
      ProgramComponent,
      PracticalComponent,
      TicketsComponent,
      AboutComponent,
      PartnersComponent,
      SpeakersComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
