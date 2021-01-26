import { PRODUCTOS } from './mock.producto';
import { FACTURAS } from './mock.facturas';


import { Detalle } from './../interfaces/detalle';


export const DETALLES : Detalle[] = [
 { id: 1,
   cantidad: 5,
   precio:2480 ,
   precioUnitario:1,
   producto: PRODUCTOS[0] ,
   factura: FACTURAS[0] },

 { id: 2,
  cantidad: 150,
  precio:2 ,
  precioUnitario:20,
  producto: PRODUCTOS[1] ,
  factura:FACTURAS[0] },

 { id: 3,
  cantidad: 250,
  precio:15 ,
  precioUnitario:7 ,
  producto: PRODUCTOS[3],
  factura:FACTURAS[1] },


 { id: 4,
  cantidad: 30,
  precio:6 ,
  precioUnitario:10,
  producto:PRODUCTOS[2] ,
  factura:FACTURAS[2] },

 { id: 5,
  cantidad: 56,
  precio:20 ,
  precioUnitario:10,
  producto:PRODUCTOS[4] ,
  factura:FACTURAS[2] },

 { id: 6,
  cantidad: 558,
  precio:500 ,
   precioUnitario:78 ,
   producto:PRODUCTOS[5] ,
   factura:FACTURAS[3] },

 { id: 7,
  cantidad: 312,
   precio:65 ,
   precioUnitario:9,
   producto:PRODUCTOS[0] ,
   factura:FACTURAS[4] },

 { id: 8,
  cantidad: 1000,
  precio:5 ,
  precioUnitario:2,
  producto:PRODUCTOS[1] ,
  factura:FACTURAS[4] },

 { id: 9,
  cantidad: 48,
  precio:1,
   precioUnitario:75 ,
  producto:PRODUCTOS[3] ,
  factura:FACTURAS[5] },



  { id: 7,
    cantidad: 30,
     precio:42 ,
      precioUnitario:80,
     producto:PRODUCTOS[0] ,
     factura:FACTURAS[4] },

   { id: 8,
    cantidad: 178,
    precio:24,
     precioUnitario:47,
    producto:PRODUCTOS[1] ,
    factura:FACTURAS[4] },

   { id: 9,
    cantidad: 245,
    precio:150 ,
     precioUnitario:75 ,
    producto:PRODUCTOS[3] ,
    factura:FACTURAS[5] },



    { id: 7,
      cantidad: 473,
       precio:478 ,
       precioUnitario:8,
       producto:PRODUCTOS[0] ,
       factura:FACTURAS[4] },

     { id: 8,
      cantidad: 145,
      precio:333,
      precioUnitario:88,
      producto:PRODUCTOS[1] ,
      factura:FACTURAS[4] },

     { id: 9,
    cantidad: 666,
      precio:150 ,
      precioUnitario:96 ,
      producto:PRODUCTOS[3] ,
      factura:FACTURAS[5] }
    ]
