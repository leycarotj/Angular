import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  productos = [
    { nombre: 'Café', precio: 25000 },
    { nombre: 'Chocolate', precio: 18000 },
    { nombre: 'Galletas', precio: 12000 }
  ];

  mensaje = '';

  seleccionarProducto(producto: any) {
    this.mensaje = 'Seleccionaste: ' + producto.nombre.toUpperCase() +
                   ' - Precio: $' + producto.precio;
  }
}