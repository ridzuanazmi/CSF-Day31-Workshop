import { Component } from '@angular/core';
import { Inventory, itemList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: Inventory[] = itemList

  selectionCart: Inventory[] = []

  addItemToCart(selection: Inventory) {
    console.info(">> addItemToCart() ", selection)

    // Find if the item has been selected before
    const item = this.selectionCart.find(i => i.name == selection.name)

    // if item != null / true
    if(!!item)
      item.quantity++
    else
      this.selectionCart = [...this.selectionCart, selection] // this.selectionBasket.push(selection)

    console.info("selectionCart: ", this.selectionCart)
  }
}
