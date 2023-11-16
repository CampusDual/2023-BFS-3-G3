import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PaymentNewComponent } from './payment-new/payment-new.component';


const routes: Routes = [
  {
    path: "",
    component: PaymentHomeComponent,
  },
  {
    path: "new",
    component: PaymentNewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
