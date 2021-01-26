import { MASTER } from './../mock/mock.master';
import { Master } from './../interfaces/master';
import { Injectable } from '@angular/core';
import { Factura } from './../interfaces/factura';




@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }


  master : Master[];


  getFacturas(): Factura[] {
    this.master = MASTER;
    return this.master[0].Factura;
  }
}
