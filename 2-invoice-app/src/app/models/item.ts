export class Item {
    id!: number;
    product!: string;
    quantity!: number;
    price!: number;

    total(): number {
        return this.price * this.quantity;
    }
}