import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SerachdeptComponent } from './serachdept/serachdept.component';
import { ViewdrComponent } from './viewdr/viewdr.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SerachdeptComponent,
    ViewdrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
