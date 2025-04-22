import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {

    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        number: 3123123,
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 5999,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 40000,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 800000,
            quantity: 3
        },
    ]
}