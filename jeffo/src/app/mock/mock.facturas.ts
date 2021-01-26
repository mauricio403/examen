import { CLIENTES } from './mock.cliente';
import { Factura } from '../interfaces/factura';


export const FACTURAS: Factura[] = [

  { id: 1,
    fechaEmision: '2/01/1998',
     numeroFactura:12154,
     subtotal:17887,
     iva:18,
     total:1024,
     cliente: CLIENTES[0]
    },
  { id: 2,
    fechaEmision: '03/24/1335',
    numeroFactura:2,
    subtotal:120,
    iva:18,
    total:1024,
    cliente: CLIENTES[0]
  },
  { id: 3,
    fechaEmision: '15/07/1996',
    numeroFactura:3,
    subtotal:120,
    iva:18,
    total:1024,
    cliente:
    CLIENTES[1]
  },
  { id: 4,
    fechaEmision: '04/08/1974',
    numeroFactura:4,
    subtotal:120,
    iva:18,
    total:1024,
    cliente: CLIENTES[1]
  },
  { id: 5,
    fechaEmision: '4/25/1870',
    numeroFactura:5,
    subtotal:120,
    iva:18,
    total:1024,
    cliente: CLIENTES[2]
  },
];
