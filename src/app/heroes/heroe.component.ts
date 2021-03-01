import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 21;
    mensaje: (number | string) = '';

    get capitalizarNombre(): string
    {
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'Brayan';
    }

    cambiarEdad():void {

        this.edad = 20;
    }

}