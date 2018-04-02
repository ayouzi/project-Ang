import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { ROUTE_PAGES } from "./pages.routes";

//import module shared 
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { IncrementComponent } from "../components/increment/increment.component";



@NgModule({
    
    declarations : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent

    ],
    
    exports : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component

    ],
    imports: [
        SharedModule,
        ROUTE_PAGES,
        FormsModule
    ]

})

export class PagesModule { }