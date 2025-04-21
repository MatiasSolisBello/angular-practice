import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { InvoiceComponent } from './app/components/invoice/invoice.component';

// Cambia el selector a 'app-invoice' para que coincida con el componente InvoiceComponent
bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));
