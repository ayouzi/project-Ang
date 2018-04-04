import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @Input() title : string = "title";
  @Input() progress:number = 50;
  
  @ViewChild("elText") texto: ElementRef;

  @Output() changeValue : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  oChanges( newValue: number)
  {
    
    // let eleTilte: any = document.getElementsByName('progress')[0];

     if(newValue >= 100)
     {
       this.progress = 100;
     }
     else if(newValue <= 0)
     {
       this.progress = 0;
     }
     else
     {
       this.progress = newValue;
     }

     this.texto.nativeElement.value = this.progress;

     this.changeValue.emit(this.progress);
     
  }

  changeV(value : number)
  {
    if(this.progress <= 0 && value < 0)
    {
      alert("progress is minus 0");
      this.progress = 0;
      this.title ="your Energe is empty";
      return;
    }


    if(this.progress >= 100 && value > 0)
    {
      alert("progress is plus 100");
      this.title ="your Energe is Good";
      this.progress = 100;
      return;
    }

    if(this.progress <= 100 && this.progress >= 0)
    {
      this.title ="Progress Download";
    }
    


    this.progress = this.progress + value;
    
    this.changeValue.emit(this.progress);

    this.texto.nativeElement.focus();
    
    
  }
}

