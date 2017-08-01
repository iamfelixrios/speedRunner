import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RunDetailsComponent } from './components/run-details/run-details.component';
import { RunListingComponent } from './components/run-listing/run-listing.component';
import { SpeedrunDataService } from './services/speedrun-data.service';
import { SpeedrunDetailDataService } from './services/speedrun-detail-data.service';
import { SpeedrunUserDataService } from './services/speedrun-user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RunDetailsComponent,
    RunListingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    SpeedrunDataService,
    SpeedrunDetailDataService,
    SpeedrunUserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
