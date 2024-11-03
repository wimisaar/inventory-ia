// src/app/container/container.component.ts
import { Component } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  containerName: string = '';

  constructor(private inventoryService: InventoryService) {}

  addContainer() {
    this.inventoryService.addContainer({ id: Date.now(), name: this.containerName, products: [] }).subscribe(response => {
      console.log(response);
    });
  }
}


