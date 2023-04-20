import { Component, Input } from '@angular/core';
import { Inventory } from '../models';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent {
  
  // ?: is optional operator, means members can be null or undefined
  // !: is non-null assertion operator. Members cannot be null or undefined
  @Input()
  cart?: Inventory[] // can be null or undefined

  // can remove from Cart through Child with @Input from Parent
  removeItemFromCart(idx: number) {
    this.cart?.splice(idx, 1) // delete at index = idx
  }
}
