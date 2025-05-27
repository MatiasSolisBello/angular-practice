import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BodegaService } from '../../services/bodega.service';
import { Bodega } from '../../models/Bodega';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bodega',
  imports: [CommonModule, RouterLink],
  templateUrl: './bodega.component.html',
  styleUrl: './bodega.component.css'
})
export class BodegaComponent {
  listBodegas?: Bodega[];
  constructor(private bodegaService: BodegaService) { }

  ngOnInit(): void {
    this.cargarBodega();
  }

  cargarBodega() {
    this.bodegaService.getBodegas().subscribe(data => {
      this.listBodegas = data;
    });
  }

  delete(_id: string){
    this.bodegaService.deleteBodega(_id).subscribe({
      next: () => this.cargarBodega(),
      error: err => console.error("Error al eliminar usuario:", err)
    })
  }

}
