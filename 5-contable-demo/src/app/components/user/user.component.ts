import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
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
}
