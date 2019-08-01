export class Product {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
    description: string;
    createAt: string;
    quantity: number;

   public Product() {
    }

    constructor(id: number, name: string, price: number, pictureUrl: string, 
        description: string, createAt: string, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
        this.description = description;
        this.createAt = createAt;
        this.quantity = quantity;
}
}