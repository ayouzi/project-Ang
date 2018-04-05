import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  

/**
 * hna darna variable obs jab object Observable, o darori njibo fo9
 * walakin majibohch (rxjs/rx)
 * hada error hit ghadi ijib lina library kamla, hna bghina ghir observable
 * hadchi min ahssan njoboh hakda ('rxjs/Observable')
 * 
 * --------------------------------------------------
 * 
 * o darna param (observer) momkin ndiro li bghina (dog, cat)
 * 
 * hada tikon type dialo howa (subscriber)
 * 
 * o had params tikon fih bzaaf example
 *   -dog.add
 *   -dog.closed 
 *     (error, complete, next, remove, unsubscribe ....)
 * 
 * 
 * -----------------------------------------------------------------
 * 
 * mli tandiro example (setInterval) tandiro (dog.next(value loop))
 * 
 * o kharj (obj), tandiro subscribe bach njibo had value dialha 
 * 
 * '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * 
 * darna dog.complete bach iwkaaf l3ad 
 * 
 * -----------------------------------------------------------
 * o fi bara (obs.subscribe) fiha 3  callback (
 *   1 - hiya formation li raj3a lina bi next()
 *   2 - hiya error ila kante
 *   3 - hiya complete
 * )
 * 
 * Example :
 *      obs.subscribe(
*       number => console.log(number), 
*       error => console.log("error for load", error),
*       ()  => console.log("is complete load this file")
*       );
*
*   ----------------------------------------------------------
*
*
* ila bghina ndiro Example:
* 
*   if(conta === 2)
*   {
*     dog.error("message error");
*   }
*   
*   had message ghadi iban fi 
*   
*      error => console.log("error for load", error),
* 
*   ((((Resultat = error for load message error))))
* 
* ############################################################
* 
* ##### => ((((((((((((((Retry()))))))))))))))
* 
* had function tatb9a t3awd lina code 
* Example:
*   
    obs.retry().subscribe(...)

    hadi tatb9a t3awd code , 7na kna darna 7ado 3, ghadi irja3 i3awd min 0
    o hakda 

    ila darna (obs.retry(2).subscribe..), ghadi i3awdo 2 mrate o iwkaaf o inafad lina 
    code error

    ila kan error mabghatch takhdam , khass tkon 
      (((((import { Observable } from 'rxjs/Rx';)))))
      Observable njiboh min Rx, bach ijib lina maktaba kamla
* -------------------------------------------------------
* hna darna function loadInterval(), darna fiha var obs li ghada dir lina loop
* o 3tina function anaha type (Observable) o type value number

####################################################################################

### => (((((((((((((((((((((((((((map())))))))))))))))))))))))))))

hadi tatjib lina value object direct

example:
  mli ndiro fi function loadInterval()
  mli tssad ndifo hdaha 

    .map((res: any) => {

      return res.valor;
    })


    had valie jaya min next(), fiha variable fi hakda 

    let val = {
      valor : conta
    }
    dog.next(val);

    hna khdaina object li ji ghadi ikon hakda fi (setInterval)
      
    valor : 1
    valor : 2
    ...

    """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    ### => (((((((((((((((((((((((((((filter())))))))))))))))))))))))))))

    had filter tatkhdam filter lina result li jaya

    o dima ttrja3 lina bi boolean(true or false), ila kante true tatrja3 lina bi value li fi 
    next()

    Example:

      .filter((val,index) => {

        if(val === "sport")
        {
          return true;
        }
      })


      hna fi filter fiha (2 params), value li jaya min next, o index tartibe dialo (tibda min 0)

      o hna fi (if) ila kant had val == "sport", ghadi tarja3 bi true , hiya ghadi ijib 

      had value
      """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      
      ((((((((((((((((((((((((((unsubscribe()))))))))))))))))))))))))))

      kin wahd probleme, howa mli tandiro example setIntervale,
      o madrnach lih clear m3a if, tib9a khdam fi backend wakha nbadlo page 

      l7al howa unsubscribe + ngOnDestroy

      - OnDestroy = howa function lifecycle dial NG,

        tatnafad mli tanghadro page 

        njiboha lfo9 : 
          import { Component, OnInit, OnDestroy } from '@angular/core';


        
          o ndiro liha implements :

              ... implements OnInit, OnDestroy {

          
                o ndiro 

            ngOnDestroy()
            {
              ...
            }
          
  ------------------------------------------------------------------

  unsubscribe : hia tatmsa7 lina subscribe li darna 

    ndiro variable : subscription : Subscription;

    darna ano type dialo ""Subscription""

    njiboha fo9 m3a Observable :
      
    import { Observable, Subscription } from 'rxjs/Rx';

    o fi dik function li ttanafad setInterval ndiroha fi variable

       this.subscription = this.loadInterval().subscribe( ...


      daba ghir namchiw (ngOnDestroy) o ndiro :

    ngOnDestroy()
      {
          this.subscription.unsubscribe();
      }
    
      darna lih unsubscribe, mli ighadar page (rxjs)
        





*/

   subscription : Subscription;
  constructor() {

    this.subscription = this.loadInterval().subscribe(
       number => console.log(number),
       error => console.log("error for load", error),
       ()  => console.log("is complete load this file")
     );
   }



  ngOnInit() {
  }
  
  ngOnDestroy()
  {
      this.subscription.unsubscribe();
  }

  loadInterval() : Observable<any>
  {
     return new Observable(dog => {
        
      let conta = 1;
      
      let inter = setInterval(()=>{
      
        conta += 1;

        dog.next(conta);

        // if(conta === 3)
        // {
        //   dog.error("no");
          
        // }

      },200);

    }).retry(5)
    .filter((value,index) => {
      
      // if(value === 2)
      // {
      //   return true;
      // }else{
      //   return false;
      // }

      return true
      
    })
    ;
  }

}
