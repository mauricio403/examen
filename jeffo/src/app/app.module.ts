import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './components/factura/factura.component';
import { FormsModule } from '@angular/forms';
import { FacturaDetallesComponent } from './components/factura-detalles/factura-detalles.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    FacturaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
