import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id: '1', title: 'T-shirt 1', quantity: 0, price: 18, like: 0, picture:'https://www.strassaccessoires.com/36195-large_default/boucles-d-oreilles.jpg'},
      {id: '2', title: "T-shirt 2",  quantity: 10, price: 21, like: 0, picture:'https://www.strassaccessoires.com/36758-large_default/boucles-d-oreilles.jpg'},
      {id: '3', title: "T-shirt 3",  quantity: 8, price: 16, like: 0, picture:'https://www.strassaccessoires.com/39502-large_default/boucles-d-oreilles.jpg'},
    ]
    
    
  }
 Buy(id:string){
  //this.products.map((product)=>{
    //if(product.id.match(id)) {
      //product.quantity=product.quantity-1;
    //}
  //})
  this.products.map((product)=>product.id.match(id)?product.quantity--:'product not found')
  //ki nebda bech na3mlou traitement sans else tkoun haka:
  //this.products.map((product)=>product.id.match(id)&&product.quantity--)
 }

}
