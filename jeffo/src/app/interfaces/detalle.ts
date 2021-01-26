import { Producto } from './producto';
import { Factura } from './factura';


export interface Detalle {
  id: number,
  cantidad: number,
  precio: number,
  precioUnitario: number,
  producto: Producto,
  factura: Factura
}
