import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-acount-setting',
  templateUrl: './acount-setting.component.html',
  styleUrls: ['./acount-setting.component.css']
})
export class AcountSettingComponent implements OnInit {

  constructor( public _justes : SettingsService) { }

  ngOnInit() 
  {
    this.colororcheck();
  }
  
  changeThem(tema: string, link: any)
  {
    this.appli(link);
      
    this._justes.aplicaTema(tema);
    
  }

  appli(link: any)
  {
    let selectores: any = document.getElementsByClassName("selector");

    for(let sel of selectores)
    {
      sel.classList.remove('working');
    }

    link.classList.add("working");
  }

  colororcheck()
  {
    let selectores: any = document.getElementsByClassName("selector");

    let tema = this._justes.ajustes.tema;

    for(let sel of selectores)
    {
      if(sel.getAttribute("data-theme") === tema)
      {
        sel.classList.add("working");
        break;
      }
    }


  }
}
