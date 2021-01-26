import { Detalle } from './../../interfaces/detalle';
import { MasterService } from './../../servicios/master.service';
import { FACTURAS } from '../../mock/mock.facturas';
import { Component, OnInit } from '@angular/core';
import { Factura } from '../../interfaces/factura';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  Factura = FACTURAS
  selectedFactura: Factura;
  facturas: Factura[];
  detalles=[];
  facturaElejida: Factura;
  constructor() { }
 prueba = "probandoAndo"



  ngOnInit(): void {
  }
  obtenerDetallesFactura(factura: Factura): void {
    this.facturaElejida = factura;
   // this.detalles = this.FacturaService.getDetalles(factura);
  }
  getFacturas(): void {
    //this.facturas = this.MasterService.getFacturas();
  }
  }




