import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
// import { RouterModule } from '@angular/router';




import { HeaderComponent } from "./header/header.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";



@NgModule({
    
    imports: [
        CommonModule
    ],
    declarations : [
        PagenotfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent

    ],
    exports: [
        PagenotfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule { }