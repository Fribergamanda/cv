import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BilderComponent } from './views/bilder/bilder.component';
import { CvComponent } from './views/cv/cv.component';
import { StartsidaComponent } from './views/startsida/startsida.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BilderComponent,
    CvComponent,
    StartsidaComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
