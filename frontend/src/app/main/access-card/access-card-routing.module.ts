import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessCardComponent } from './access-card/access-card.component';


const routes: Routes = [
  {
    path: "",
    component: AccessCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessCardRoutingModule { }
