import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  nombres: string[] = ['Brayan', 'Jose', 'Miguel', 'Jesus'];

  // nombresBorrado:string = '';

  nombresBorrados: string[] = [];

  borrarNombre() {
    // this.nombresBorrado = this.nombres.shift() || '';
    this.nombresBorrados.push(this.nombres.shift() || '');
  }
}
