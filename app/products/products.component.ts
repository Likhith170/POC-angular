import { Component } from '@angular/core';
import { CartService } from '../CartService/cart-service.service';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private service: OrderDetailsService, private cartService: CartService) { }
  bagData: any;
  bagData1: any;
  cartItemCount: number = 0;

  ngOnInit(): void {
    this.bagData = this.service.bagDetails;
    this.bagData1 = this.service.bagDetails1;
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  addToCart(item: any): void {
    const product = {
      id: item.id,
      name: item.bagName,
      price: item.bagPrice,
      total: 0,
      quantity: 0,
      description: item.bagDetails,
      image: item.bagImg
    };
    this.cartService.addToCart(product);
  }
}
