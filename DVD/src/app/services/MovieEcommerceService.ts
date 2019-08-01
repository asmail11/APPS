import { Injectable } from "@angular/core";
import { MovieOrder } from '../entities/MovieOrder';
import { MovieOrders } from '../entities/MovieOrders';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MovieEcommerceService {
    private moviesUrl = "/api/movies";
    private orderUrl = "/api/orders";

    private movieOrder: MovieOrder;
    private orders: MovieOrders = new MovieOrders();

    private movieOrderSubject = new Subject();
    private ordersSubject = new Subject();
    private totalSubject = new Subject();


    private total: number;

    MovieOrderChanged = this.movieOrderSubject.asObservable();
    OrdersChanged = this.ordersSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient){

    }
    getAllMovies(){
        return this.http.get(this.moviesUrl);
    }
    saveOrder(order: MovieOrders){
        return this.http.post(this.orderUrl, order);
    }
    set SelectedMovieOrder(value: MovieOrder){
        this.movieOrder = value;
        this.movieOrderSubject.next();
    }

    get SelectedMovieOrder(){
        return this.movieOrder;
    }
    set MovieOrders(value: MovieOrders){
        this.orders = value;
        this.ordersSubject.next();
    }
    get MovieOrders(){
        return this.orders;
    }
    set Total(value: number){
        this.total = value;
        this.totalSubject.next();
    }
    get Total(){
        return this.total;
    }

}