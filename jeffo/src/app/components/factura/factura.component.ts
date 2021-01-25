import { FACTURAS } from './../../mock.facturas';
import { Component, OnInit } from '@angular/core';
import { Factura } from '../../interfaces/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  Factura = FACTURAS
  selectedFactura: Factura;

  constructor() { }
 prueba = "probandoAndo"

 factura: Factura = {
  fechadeEmision : "05/01/1998",
  numeroDeFactura: "0511",
  cedula: "1804470738",
  nombreCliente: "Armando Paredes",
  direccion: "Stalingrado-Russia",
  telefono: "0989874575",
  subtotal: "54",
  iva: "21",
  total: "555"
}

  ngOnInit(): void {
  }

  onSelect(factura: Factura): void {
    this.selectedFactura = factura;
  }
}
