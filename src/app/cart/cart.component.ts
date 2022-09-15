import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(item: Product) : void {
    // Note: this should refresh the view somehow ...
    this.cartService.remove(item)
  }

}
