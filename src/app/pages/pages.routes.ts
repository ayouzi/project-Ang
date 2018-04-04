import { RouterModule, Routes } from "@Angular/router";


import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AcountSettingComponent } from "./acount-setting/acount-setting.component";


const pagesRoutes: Routes = [

    {path : "",  component: PagesComponent,children: [
        {path : "dashboard",  component: DashboardComponent},
        {path : "progress",   component: ProgressComponent},
        {path : "grafica1",   component: Graficas1Component},
        {path : "account-settings",   component: AcountSettingComponent},
        {path : "",           redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    }

];

export const ROUTE_PAGES = RouterModule.forChild (pagesRoutes)  ;