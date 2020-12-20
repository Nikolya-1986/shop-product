import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeExtraComponent } from './home-extra/home-extra.component';
import { ErrorComponent } from './error/error.component';
import { AboutGuard } from './shared/about.quard';

const routes: Routes = [
  { path: "", component: HomeComponent, children: [
    { path: "extra", component: HomeExtraComponent }
  ] },
  { path: "stock", loadChildren: () => import("./stock/stock.module").then(module => module.StockModule), canActivate: [AboutGuard]},
  { path: "goods", loadChildren: () => import("./goods/goods.module").then(module => module.GoodsModule)},
  { path: "payment", loadChildren: () => import("./payment/payment.module").then(module => module.PaymentModule)},
  { path: "wholesale", loadChildren: () => import("./wholesale/wholesale.module").then(module => module.WholesaleModule) },
  { path: "question", loadChildren: () => import("./question/question.module").then(module => module.QuestionModule) },
  { path: "contact", loadChildren: () => import("./contact/contact.module").then(module => module.ContactModule) },
  { path: "cart", loadChildren: () => import("./cart/cart.module").then(module => module.CartModule) },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error'}//для обработки всех не существующих роутов, прописывается последним, с помощью праметра redirectTo указываем нужную страницу
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//регистрирует входящие величины для данного модуля
  exports: [RouterModule]//открывает публичный ip к опреденный данным который передаётся
})

export class AppRoutingModule { }