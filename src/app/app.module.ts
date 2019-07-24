import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import{ AdsenseModule } from 'ng2-adsense';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2101790534832505'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
