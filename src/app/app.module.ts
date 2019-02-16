import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevenSegmentToNumberComponent } from './seven-segment-to-number/seven-segment-to-number.component';
import { MarcoPoloGameComponent } from './marco-polo-game/marco-polo-game.component';

@NgModule({
  declarations: [
    AppComponent,
    SevenSegmentToNumberComponent,
    MarcoPoloGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
