import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    
    /**
     * fi had promise, howa tikhdam b7al ajax, Async, 
     * hna darna variable promis fih object Promise
     * o resolve hia mli tatnja7 3maliya tan3aito liha o min bara tandiro (then)
     * 
     * darna interval, o 9alna lih ml tkon === 3, rah hna ntab9 resolve, mli darnaha 
     * resolve(), tanmchiw bara o ndiro 
     * promis.then(...), hna ach bghina nkharjo 
     * Example: darna fi resolve("message")
     * o fi then ndiro , 
     *   
     *   promis.then(res => console.log(res))
     * 
     * fi hadik res tkhaznate fiha "message"
     * -----------------------------------------------------------
     * 
     * o fi reject, hadi ila kan chi error , manj7atch l3amaliya 
     * tandiroha 
     * 
     * o fi bara blast (then) tandiro catch
     * 
     * Example: promis.catch(error => console.log(error))
     */
    
    
    let promis = new Promise((resolve, reject) => {
      
      let contador = 0;
     let inetrval =  setInterval(() => {
        
        contador += 1;
        console.log(contador);
        if(contador === 3)
        {
         
          resolve(inetrval);
          clearInterval(inetrval);
        }

      },1000);


    });
    
    promis.then(
      
      () => console.log("The End")

    );

  }

  ngOnInit() {
  }

}
