import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './core/routing/app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/';
import { HomepageComponent } from './pages/home/';
import { LoginComponent } from './pages/login';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomepageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
