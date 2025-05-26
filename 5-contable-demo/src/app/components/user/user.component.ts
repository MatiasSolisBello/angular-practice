import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  listUsers?: Usuario[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.userService.getUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

  delete(_id: string){
    this.userService.deleteUser(_id).subscribe({
      next: () => this.cargarUsuario(),
      error: err => console.error("Error al eliminar usuario:", err)
    })
  }
}
