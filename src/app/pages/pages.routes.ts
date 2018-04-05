import { RouterModule, Routes } from "@Angular/router";


import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AcountSettingComponent } from "./acount-setting/acount-setting.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const pagesRoutes: Routes = [

    {path : "",  component: PagesComponent,children: [
        {path : "dashboard",  component: DashboardComponent, data : {title : "Dashboard"}},
        {path : "progress",   component: ProgressComponent, data : {title : "ProgressBar"}},
        {path : "grafica1",   component: Graficas1Component, data : {title : "Grafica"}},
        {path : "promesas",   component: PromesasComponent, data : {title : "Promess"}},
        {path : "rxjs",   component: RxjsComponent, data : {title : "RxJs"}},
        {path : "account-settings",   component: AcountSettingComponent, data : {title : "Account Setting"}},
        {path : "",           redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    }

];

export const ROUTE_PAGES = RouterModule.forChild (pagesRoutes)  ;