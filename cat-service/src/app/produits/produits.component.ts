import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits:any;

  constructor(private HttpClient:HttpClient) { }

  ngOnInit() {

  }
  onGetProduct(){
     this.HttpClient.get("http://localhost:8489/produits")
     .subscribe(data=> {
       this.produits = data;
     },err=>{
       console.log(err);
     })
  }

}
