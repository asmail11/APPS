import { Movie } from "./Movie";
export class MovieOrder {
    movie: Movie;
    quantity: number;

    constructor(movie: Movie, quantity: number){
        this.movie = movie;
        this.quantity = quantity;
    }
}
