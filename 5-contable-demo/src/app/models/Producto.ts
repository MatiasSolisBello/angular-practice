import { Bodega } from "./Bodega";

export class Producto {
    id!: number;
    nombre?: string;
    descripcion?: string;
    precio?: number;
    stock?: number;
    imagen?: string;
    bodega?: Bodega;
}