export class Usuario{
    _id!: string;
	rut?: string;
    nombre?: string;
    correo?: number;
    clave?: string;
    role?: 'ADMIN_ROLE' | 'BODEGA_ROLE' | 'CLIENTE_ROLE';
}