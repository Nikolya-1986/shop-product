import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//компоненты верхнего уровня
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HomeExtraComponent } from './home-extra/home-extra.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { AboutGuard } from './shared/about.quard';

import { SharedModule } from './shared/shared.module';//дополнительный модуль
import { IfnotDirective } from './directives/ifnot.directive';
import { OrderRepository } from './repository/order.repository';
import { Order } from './model/order.model';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    HomeExtraComponent,
    HomeCarouselComponent,
    FooterComponent,
    ErrorComponent,
    IfnotDirective,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [AboutGuard, CartService, OrderRepository, Order],
  bootstrap: [AppComponent]
})

export class AppModule { }