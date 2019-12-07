import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './modules/ui/ui.module';
import { RoutingModule } from './modules/routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/common/pagenotfound/pagenotfound.component';
import { PageUnderConstructionComponent } from './components/common/page-under-construction/page-under-construction.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    PageUnderConstructionComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
