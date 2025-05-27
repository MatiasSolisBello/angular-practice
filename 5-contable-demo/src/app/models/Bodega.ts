import { Usuario } from "./Usuario";

export class Bodega {
    _id!: string;
    numero?: number;
    nombre?: string;
    direccion?: string;
    descripcion?: string;
    estado?: 'En Mantención' | 'Abierto' | 'Cerrado';
    usuario?: Usuario;
}