import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { AgeCatogaryComponent } from './home/age-catogary/age-catogary.component';
import { ProdutShowcaseComponent } from './home/produt-showcase/produt-showcase.component';
import { PoductCatogaryComponent } from './home/poduct-catogary/poduct-catogary.component';
import { PreFooterComponent } from './home/pre-footer/pre-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    AgeCatogaryComponent,
    ProdutShowcaseComponent,
    PoductCatogaryComponent,
    PreFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
