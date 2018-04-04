import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  constructor() { }

  menu: any = [

    {
      title: "Principale",
      icon : "mdi mdi-gauge",

      subemenu: [

        {title: "Dashboar",     url :'/dashboard'},
        {title: "ProgressBar",  url :'/progress'},
        {title: "Graficas",     url :'/grafica1'}
      ]
    
    }

  ];

}
