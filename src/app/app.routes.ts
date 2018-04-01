import { RouterModule, Routes} from "@Angular/router";

//Components
import { LoginComponent } from "./login/login.component";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";
import { RegisterComponent } from "./login/register.component";


const appRoutes: Routes = [
    {path : "login",      component: LoginComponent},
    {path : "rigester",   component: RegisterComponent },
    {path : "**",         component: PagenotfoundComponent}



];

export const APP_ROUTES  = RouterModule.forRoot(appRoutes , { useHash: true });