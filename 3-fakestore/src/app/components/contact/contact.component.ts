import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;
  successMessage = '';

  ngOnInit(): void {

  }

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    
    })
  }

  send(event: Event) {
    event.preventDefault();

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const fullName = this.contactForm.get('full_name')?.value;
      this.successMessage = `Mensaje de ${fullName} enviado exitosamente.`;
      this.contactForm.reset(); // Opcional: limpia el formulario
    }
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
