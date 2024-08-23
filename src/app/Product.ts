
export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    url: string;

    constructor(id: number, name: string, description: string, price: number, quantity: number, url: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.url = url;
    }
}

