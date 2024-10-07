import { NgModule } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { LoginComponent } from './pages/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,


  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
