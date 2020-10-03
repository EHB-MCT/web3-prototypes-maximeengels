import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PracticalComponent } from './practical/practical.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'practical', component: PracticalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'speakers/:id', component: SpeakersComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // WILDCARD ROUTE  intercepts invalid URLs and handles them gracefully
  // dit is een error route (kan eventueel een 404 pagina zijn)
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
