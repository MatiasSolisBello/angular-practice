import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    return this.invoice;
  }

  calculateTotal(): number {
    return this.invoice.items.reduce(
      (acc, item) => acc + (item.price * item.quantity), 0
    );
  }
}
