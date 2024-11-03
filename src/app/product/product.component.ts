// src/app/product/product.component.ts
import { Component } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  containerId: string = '';
  productName: string = '';

  constructor(private inventoryService: InventoryService) {}

  addProduct() {
    const product = { id: Date.now(), name: this.productName };
    this.inventoryService.addProduct(this.containerId, product).subscribe(response => {
      console.log(response);
    });
  }
}
