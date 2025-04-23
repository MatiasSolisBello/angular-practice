import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { Item } from '../../models/item';

// RECUERDA agregar los otros componentes que uses en el template
@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit{
  @Input() item!: Item;

  invoice!: Invoice
  total!: number;
  
  constructor(private service: InvoiceService) { }


  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
    this.total = this.service.calculateTotal();
  }



}
