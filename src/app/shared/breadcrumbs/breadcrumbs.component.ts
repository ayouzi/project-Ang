import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@Angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  
  titleBreadCrumb: string = "default text bread crumb";
  constructor(private _router: Router,
              private title : Title,
              private _meta: Meta 
            ) { 

    this._router.events
    .filter(e => e instanceof ActivationEnd)
    .filter((e: ActivationEnd) => e.snapshot.firstChild === null)
    .map((e: ActivationEnd) => e.snapshot.data)
    .subscribe(ev => {

      this.titleBreadCrumb = ev.title;
      this.title.setTitle(ev.title);

      let MetaDef : MetaDefinition = {

        name : 'description',
        content : this.titleBreadCrumb
      };
    
      this._meta.updateTag(MetaDef);

    });

  }

  ngOnInit() {
  }

}
/**
 * daba bghina ndiro subscribe m3a breadCrumb
 * 
 * mchina darna fi (pages.routes.ts) zadna fi kole route (data : {title: ".."})
 * 
 * kola title ti3ni url li fih hna daba 
 * 
 * o bghina njibooh kola mitghayar url i tbadal (breadCrumb)
 * 
 * jina hna darna (Router)
 * 
 * o fi had route darna (.events) had event tijib lina bzaaf dial ma3lomate 
 * 
 * dial had routes
 * Example :
 * 
 *     -ActivationEnd
 *     -ChildActivationEnd ...
 * 
 * hna bghina mohime howa first -ActivationEnd, hit fih bzaf dial ma3lomate 
 * 
 * dial had route li fih hna daba (Example /dashboard)
 * 
 * o min had ma3lomate (snapshot)=> hadi fiha bzaaf 
 *   Example : 
 *       -data : {title: ".."}//hada title li dafna fi route
 *       - firstChild : null
 * 
 * 
 * 9bal mandiro (subscribe) khassna ndiro filter, bach njibo ghir li bghina 
 *   
 *         .filter(e => e instanceof ActivationEnd)
 * 
 *   hna 9ln lih had value li jaya min (events) ach kina fiha (ActivationEnd)
 * 
 *   ghadi tjib ghir li fiha hadi 
 * 
 * o nkamlo
 * 
 *   .filter((e: ActivationEnd) => e.snapshot.firstChild === null)
 * 
 * hna 9alna lih (e) type dialo (ActivationEnd) bach ijib lin object li fih
 * 
 *   o 9alna lih ach fi had (ActivationEnd) kina (snapshot.firstChild) ikon null
 * 
 * nkamlo:
 * 
 *   .map((e: ActivationEnd) => e.snapshot.data)
 * 
 * hna darna (map) ghadi tjib lina data,  o hiya li ghadi n3ardoha bi (subscribe)
 * 
   *  this._router.events
      .filter(e => e instanceof ActivationEnd)
      .filter((e: ActivationEnd) => e.snapshot.firstChild === null)
      .map((e: ActivationEnd) => e.snapshot.data)
      .subscribe(ev => {
  
        this.titleBreadCrumb = ev.title;
      });
 */


 /**
  *   ((((((((((((((((((((    Title    ))))))))))))))))))))
  * 
  * darna title, bach itbadal 3la hssab kola page
  * jbna title fo9 how 1
  * 
  *   import { Title } from '@angular/platform-browser';
  * 
  * o darna lih Injection fi (constructor)
  * 
  * o fi subscribe drna :
  * 
  *   this.title.setTitle(ev.title);
  * 
  * fi had Object dial title fih bzaaf 
  * Example :
  *   - getTitle
  * 
  * 7na daba darna ghir -setTitle
 */


  /**
  *   ((((((((((((((((((((    Meta    ))))))))))))))))))))
  * 
  * hna ghadi nat3amli kifach ndifo meta tag, fi page html 
  * bach tkon mziana m3a SEO
  * 
  * njiboh fo9 m3a title
  *    import { Title, Meta } from '@angular/platform-browser';
  *   
  *   o ndiro liha Inject (public meta: Meta)
  * o njibo hta MetaDefinition m3ah bl mandiro liha Inject
  * 
  * o ndiro
  *     let MetaDef : MetaDefinition = {

        name : 'description',
        content : this.titleBreadCrumb
      };

      hna darna ta3rif meta , 
        o ktabna hakda b7al fi html

       ((( <meta name="description" content="ProgressBar">)))

      o ndifo ta7taha 

      this._meta.updateTag(MetaDef);

      hna darna bach itanafad had tag

      o darna updateTag, momkine nidor (addTag, addTags, getTag, getTags ...)




  */