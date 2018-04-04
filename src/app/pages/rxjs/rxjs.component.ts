import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {
  

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
* ##### => Retry()
* 
* had function tatb9a t3awd lina code 
* Example:
*   
    obs.retry().subscribe(...)

    hadi tatb9a t3awd code , 7na kna darna 7ado 3, ghadi irja3 i3awd min 0
    o hakda 

    ila darna (obs.retry(2).subscribe..), ghadi i3awdo 2 mrate o iwkaaf o inafad lina 
    code error
* -------------------------------------------------------
* hna darna function loadInterval(), darna fiha var obs li ghada dir lina loop
* o 3tina function anaha type (Observable) o type value number
*/

   
  constructor() {

    this.loadInterval().subscribe(
       number => console.log(number),
       error => console.log("error for load", error),
       ()  => console.log("is complete load this file")
     );
   }



  ngOnInit() {
  }


  loadInterval() : Observable<any>
  {
     return new Observable(dog => {
        
      let conta = 1;
      
      let inter = setInterval(()=>{
      
        conta += 1;

        dog.next(conta);

        if(conta === 3)
        {
          clearInterval(inter);
          
        }

      },1000);

    }).retry();
  }

}
