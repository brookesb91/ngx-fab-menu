import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxFabMenuModule } from '@brookes/ngx-fab-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxFabMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
