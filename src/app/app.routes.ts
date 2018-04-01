import { RouterModule, Routes} from "@Angular/router";

//Components
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from "./login/register.component";


const appRoutes: Routes = [

    {path : "",  component: PagesComponent,children: [
            {path : "dashboard",  component: DashboardComponent},
            {path : "progress",   component: ProgressComponent},
            {path : "grafica1",   component: Graficas1Component},
            {path : "",           redirectTo: '/dashboard', pathMatch: 'full'},
         ]
   },
    
    {path : "login",      component: LoginComponent},
    {path : "rigester",   component: RegisterComponent },
    {path : "**",         component: PagenotfoundComponent}



];

export const APP_ROUTES  = RouterModule.forRoot(appRoutes , { useHash: true });