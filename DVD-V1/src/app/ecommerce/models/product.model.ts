export class Product{
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;

    constructor(id: number, name: string,  description: string, price: number, pictureUrl: string){
        this.id = id;
        this.name = name;
        description = description;
        this.price = price;
        this.pictureUrl = pictureUrl;
    }
}