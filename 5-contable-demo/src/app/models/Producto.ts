import { Bodega } from "./Bodega";

export class Producto {
    _id!: string;
    nombre?: string;
    descripcion?: string;
    precio?: number;
    stock?: number;
    imagen?: string;
    bodega?: Bodega;
}