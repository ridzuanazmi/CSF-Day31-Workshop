import { Component, Input, Output } from '@angular/core';
import { Inventory, itemList } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  // ?: is optional operator, means members can be null or undefined
  // !: is non-null assertion operator. Members cannot be null or undefined
  @Input()
  items!: Inventory[]

  @Output()
  addNewItem = new Subject<Inventory>() // Adding the object Inventory

  addToCart(item: Inventory) {
    this.addNewItem.next(item)
  }

}
