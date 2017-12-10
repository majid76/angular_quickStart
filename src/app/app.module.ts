import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from './hero.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Fantastic4Component } from './heroes/fantastic4/fantastic4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Fantastic4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
