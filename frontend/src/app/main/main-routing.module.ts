import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "ontimize-web-ngx";

import { MainComponent } from "./main.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule), data: { oPermission: { permissionId: 'home'}}
      },
      {
        path: "accesscard",
        loadChildren: () =>
          import("./access-card/access-card.module").then((m) => m.AccessCardModule), data: { oPermission: { permissionId: 'home'}}
      },
      {
        path: "gyms",
        loadChildren: () =>
          import("./gyms/gyms.module").then((m) => m.GymsModule), data: { oPermission: { permissionId: 'gymadmin', restrictedPermissionsRedirect: '/main/home' }}
      },
      {
        path: "gymsuser",
        loadChildren: () =>
          import("./gymsuser/gymsuser.module").then((m) => m.GymsuserModule),  data: { oPermission: { permissionId: 'gymuser', restrictedPermissionsRedirect: '/main/gyms' }}
      },
      {
        path: "gymservices",
        loadChildren: () =>
          import("./services-gymadmin/services-gymadmin.module").then((m) => m.ServicesGymadminModule), data: { oPermission: { permissionId: 'serviceadmin', restrictedPermissionsRedirect: '/main/home' }}
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profiles/profiles.module").then((m) => m.ProfilesModule), data: { oPermission: { permissionId: 'profile', restrictedPermissionsRedirect: '/main/home'}}
      },
      {
        path: "reviews/new",
        loadChildren: () =>
          import("./reviews/reviews.module").then((m) => m.ReviewsModule), data: { oPermission: { permissionId: 'reviews', restrictedPermissionsRedirect: '/main/home'}}
      },
      {
        path: "payment",
        loadChildren: () =>
          import("./payment/payment.module").then((m) => m.PaymentModule), data: { oPermission: { permissionId: 'payment', restrictedPermissionsRedirect: '/main/home'}}
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
