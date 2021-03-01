
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<div class="container">
      <h1>{{title}}</h1>

<button (click)="acumular(-base)" class="btn btn-primary"> - 1</button>

<h2>{{ numero }}</h2>

<button (click)="acumular(base)" class="btn btn-primary"> + 1</button>
    </div>`
})

 export class ContadorComponent {

    title: string = 'Contador App';
    numero: number = 0;
  
    base: number = 100;
  
    acumular(valor: number){
      this.numero += valor;
    }
}