import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  
  ajustes: justes = {

    temaUrl: "assets/css/colors/default.css",
    tema : "default"

  }
  constructor( @Inject(DOCUMENT) private _document) { 

    this.cargarTema();
  }

  guardaTema ()
  {
    console.log("Save tema in local Storage");

    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  }

  cargarTema()
  {
      if(localStorage.getItem("ajustes")){

        this.ajustes = JSON.parse(localStorage.getItem("ajustes"));

        console.log("upload tema");
        
        this.aplicaTema(this.ajustes.tema);
      }
      else
      {
        this.aplicaTema(this.ajustes.tema);
      }
    
  }

  aplicaTema(tema: string)
  {
    let pathCSS = `assets/css/colors/${tema}.css`;
    let temaano = this._document.querySelector("#theme").setAttribute("href",pathCSS);
    

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = pathCSS;

    this.guardaTema();
  }

}

interface justes {

  temaUrl: string;
  tema: string;
}