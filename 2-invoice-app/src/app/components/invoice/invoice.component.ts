import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
//import { Item } from '../../models/item';
import {DecimalPipe, UpperCasePipe} from '@angular/common';

// RECUERDA agregar los otros componentes que uses en el template
@Component({
  selector: 'app-invoice',
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{

  // Interpolación
  empresa = 'Juan Enterprise';

  imagenUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  mostrarMensaje() {
    alert('¡Botón presionado!');
  }

  //@Input() item!: Item;

  invoice!: Invoice
  total!: number;
  
  // Llama al servicio InvoiceService
  constructor(private service: InvoiceService) { }


  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
    this.total = this.service.calculateTotal();
  }



}
