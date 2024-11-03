// src/app/services/inventory.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addContainer(container: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-container`, container);
  }

  addProduct(containerId: string, product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-product`, { containerId, product });
  }
}

