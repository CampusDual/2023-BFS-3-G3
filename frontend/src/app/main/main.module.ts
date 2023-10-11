import { NgModule } from "@angular/core";
import { OntimizeWebModule } from "ontimize-web-ngx";

import { SharedModule } from "../shared/shared.module";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { GymsModule } from "./gyms/gyms.module";

@NgModule({
  imports: [SharedModule, OntimizeWebModule, MainRoutingModule],
  declarations: [MainComponent],
})
export class MainModule {}
