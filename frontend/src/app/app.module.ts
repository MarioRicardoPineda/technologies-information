import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyCardComponent,
    AboutComponent,
    TechnologiesComponent,
    TechnologyComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
