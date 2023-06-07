import { Component } from '@angular/core';
import { CartService } from './CartService/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Ecommerce'
  cartItemCount$ = this.cartService.getCartItemCount();

  constructor(private cartService: CartService) { }
  
}
