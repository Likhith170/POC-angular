import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItems: { id: number; name: string; price: number; total: number; quantity: number; description: string; image: string; }[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  

  addToCart(product: { id: number; name: string; price: number; total: number; quantity: number; description: string; image: string; }) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      const newItem = { ...product, quantity: 1, total: product.price };
      this.cartItems.push(newItem );
    }
    this.cartItemCount.next(this.cartItems.length);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartItemCount.next(this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
  getTotalQuantity(): number {
    let totalQuantity = 0;
    for (const item of this.cartItems) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  }
  
  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.total;
    }
    return totalPrice;
  }
  
}
