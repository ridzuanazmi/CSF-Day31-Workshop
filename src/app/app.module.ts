import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory.component';
import { ShoppingCardComponent } from './components/shopping-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ShoppingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
