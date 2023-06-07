import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../CartService/cart-service.service';
import { NgForm } from '@angular/forms';  
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  
  cartItems: { id: number; name: string; price: number; total: number; quantity: number; description: string; image: string; }[] = [];
 
  totalPrice: number = 0;
  constructor(private param: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    // Retrieve cart items from the cart service
    this.cartItems = this.cartService.getCartItems();
    
    this.calculateTotalAmount();
  }
  

  removeFromCart(index: number): void {
    // Remove item from the cart using the index
    this.cartService.removeFromCart(index);
    
    this.calculateTotalAmount();
  }
  calculateTotalAmount(): void {
    this.totalPrice = 0;
    this.cartItems.forEach(item => {
      this.totalPrice += item.total;
    });
  }
  
  proceedToPayment(paymentForm: NgForm): void {
    if (paymentForm.valid) {
      // Process the form submission and proceed with the payment
      console.log('Form submitted successfully');
    } else {
      // Display an error message or handle invalid form data
      console.log('Invalid form data');
    }
  }

}
